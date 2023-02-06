import { DataSource } from "typeorm";
import app from "../../../app";
import AppDataSource from "../../../data-source";
import  request from "supertest";
import { mockedCliente, mockedClienteLogin, mockedClienteToDelete, mockedClienteToUpdateLogin, mockedClienteToUpdate } from "../../mocks";


describe("/clientes", () => {
    let connection: DataSource

    beforeAll(async() => {
        await AppDataSource.initialize().then((res) => {
            connection = res
        }).catch((err) => {
            console.error("Error during Data Source initialization", err)
        })
    })

    afterAll(async() => {
        await connection.destroy()
    })

    test("POST /clientes - Must be able to create a cliente", async () => {
        const response = await request(app).post("/clientes").send(mockedCliente)

        expect(response.body).toHaveProperty("id")
        expect(response.body).toHaveProperty("name")
        expect(response.body).toHaveProperty("email")
        expect(response.body).toHaveProperty("phone")
        expect(response.body).toHaveProperty("isActive")
        expect(response.body).toHaveProperty("createdAt")
        expect(response.body).not.toHaveProperty("password")
        expect(response.body.name).toEqual("Fulano de Tal")
        expect(response.body.email).toEqual("fulano@mail.com")
        expect(response.body.isActive).toEqual(true)
        expect(response.status).toBe(201)
    })

    test("POST /clientes - Should not be able to create a cliente that already exists", async () => {
        const response = await request(app).post("/clientes").send(mockedCliente)

        expect(response.body).toHaveProperty("message")
        expect(response.status).toBe(403)
    })

    test("GET /clientes - Must be able to list clientes",async () => {
        await request(app).post("/clientes").send(mockedCliente)
        const clienteLoginResponse = await request(app).post("/login").send(mockedClienteLogin);
        const response = await request(app).get("/clientes").set("Authorization", `Bearer ${clienteLoginResponse.body.token}`)

        expect(response.body).toHaveProperty("id")
        expect(response.body).toHaveProperty("name")
        expect(response.body).toHaveProperty("email")
        expect(response.body).toHaveProperty("phone")
        expect(response.body).toHaveProperty("isActive")
        expect(response.body).toHaveProperty("createdAt")
        expect(response.body).toHaveProperty("contato")
        expect(response.body).not.toHaveProperty("password")
    })

    test("GET /clientes - Should not be able to list clientes without authentication", async () =>{
        const response = await request(app).get("/clientes")

        expect(response.body).toHaveProperty("message")
        expect(response.status).toBe(401)
    })

    test("DELETE /clientes/:id - Should not be able to delete cliente without authentication", async() => {
        const clienteCreatedTobeDeleted = await request(app).post("/clientes").send(mockedClienteToDelete)
        

        const clienteLoginResponse = await request(app).post("/login").send(mockedClienteLogin);
        
        const ClienteTryingDelete = await request(app).get('/clientes').set("Authorization", `Bearer ${clienteLoginResponse.body.token}`)

        const response = await request(app).delete(`/clientes/${clienteCreatedTobeDeleted.body.id}`)
        
        
        expect(response.body).toHaveProperty("message")
        expect(response.status).toBe(401)


    })

    test("DELETE /clientes/:id -  Must be able to soft delete cliente",async () => {
        await request(app).post('/clientes').send(mockedCliente)

        const clienteLoginResponse = await request(app).post("/login").send(mockedClienteLogin);
        const ClienteTobeDeleted = await request(app).get('/clientes').set("Authorization", `Bearer ${clienteLoginResponse.body.token}`)

        const response = await request(app).delete(`/clientes/${ClienteTobeDeleted.body.id}`).set("Authorization", `Bearer ${clienteLoginResponse.body.token}`)
        
        const findCliente = await request(app).get('/clientes').set("Authorization", `Bearer ${clienteLoginResponse.body.token}`)
        
        

        expect(response.status).toBe(204)
        expect(findCliente.status).toBe(400)
     
    })

    test("PATCH /clientes/:id -  should not be able to update cliente without authentication",async () => {
        const clienteLoginResponse = await request(app).post("/login").send(mockedClienteLogin);
        const ClienteTobeDeleted = await request(app).get('/clientes').set("Authorization", `Bearer ${clienteLoginResponse.body.token}`)
        const response = await request(app).patch(`/clientes/${ClienteTobeDeleted.body.id}`)

        expect(response.body).toHaveProperty("message")
        expect(response.status).toBe(401)
    })

    test("PATCH /clientes/:id -  should not be able to update cliente without authentication",async () => {
        const clienteLoginResponse = await request(app).post("/login").send(mockedClienteLogin);
        const ClienteTobeDeleted = await request(app).get('/clientes').set("Authorization", `Bearer ${clienteLoginResponse.body.token}`)
        const response = await request(app).patch(`/clientes/${ClienteTobeDeleted.body.id}`)

        expect(response.body).toHaveProperty("message")
        expect(response.status).toBe(401)
    })

    test("PATCH /clientes/:id - should not be able to update cliente with invalid id",async () => {
        const newValues = {name: "Joana Brito", email: "joanabrito@mail.com"}

        const clienteLoginResponse = await request(app).post("/login").send(mockedClienteLogin);
        const token = `Bearer ${clienteLoginResponse.body.token}`
        
        const clienteTobeUpdateRequest = await request(app).get("/clientes").set("Authorization", token)
        const clienteTobeUpdateId = clienteTobeUpdateRequest.body.id

        const response = await request(app).patch(`/clientes/13970660-5dbe-423a-9a9d-5c23b37943cf`).set("Authorization",token).send(newValues)

        expect(response.body).toHaveProperty("message")
        expect(response.status).toBe(401)
    })
    
    test("PATCH /clientes/:id - should not be able to update isActive field value",async () => {
        const newValues = {isActive: false}

        const clienteLoginResponse = await request(app).post("/login").send(mockedClienteLogin);
        const token = `Bearer ${clienteLoginResponse.body.token}`
        
        const clienteTobeUpdateRequest = await request(app).get("/clientes").set("Authorization", token)
        const clienteTobeUpdateId = clienteTobeUpdateRequest.body.id

        const response = await request(app).patch(`/clientes/${clienteTobeUpdateId}`).set("Authorization",token).send(newValues)
        expect(response.body).toHaveProperty("message")
        expect(response.status).toBe(401)
    })

    test("PATCH /clientes/:id - should not be able to update id field value",async () => {
        const newValues = {id: false}

        const clienteLoginResponse = await request(app).post("/login").send(mockedClienteLogin);
        const token = `Bearer ${clienteLoginResponse.body.token}`
        
        const clienteTobeUpdateRequest = await request(app).get("/clientes").set("Authorization", token)
        const clienteTobeUpdateId = clienteTobeUpdateRequest.body.id

        const response = await request(app).patch(`/clientes/${clienteTobeUpdateId}`).set("Authorization",token).send(newValues)
        expect(response.body).toHaveProperty("message")
        expect(response.status).toBe(401)
    })

    test("PATCH /clientes/:id -  should be able to update cliente",async () => {
        const ClienteToupdate = await request(app).post("/clientes").send(mockedClienteToUpdate)

        const newValues = {name: "Beltrano de Brito", email: "beltrano_brito@mail.com"}

        const clienteLoginResponse = await request(app).post("/login").send(mockedClienteToUpdateLogin);
        const token = `Bearer ${clienteLoginResponse.body.token}`

        const clienteTobeUpdateRequest = await request(app).get("/clientes").set("Authorization", token)
        
        const clienteTobeUpdateId = ClienteToupdate.body.id
        

        const response = await request(app).patch(`/clientes/${clienteTobeUpdateId}`).set("Authorization",token).send(newValues)

        

        const clienteUpdated = await request(app).get("/clientes").set("Authorization", token)

        expect(response.status).toBe(200)
        expect(clienteUpdated.body.name).toEqual("Beltrano de Brito")
        expect(clienteUpdated.body).not.toHaveProperty("password")
    }) 

})