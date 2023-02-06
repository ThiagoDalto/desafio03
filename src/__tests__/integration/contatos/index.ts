import { DataSource } from "typeorm";
import app from "../../../app";
import AppDataSource from "../../../data-source";
import  request from "supertest";
import {  mockedCliente, mockedClienteLogin, mockedContato, mockedUpdateContato, mockedDeleteContato } from "../../mocks";


describe("/contatos", () => {
    let connection: DataSource

    beforeAll(async() => {
        await AppDataSource.initialize().then((res) => {
            connection = res
        }).catch((err) => {
            console.error("Error during Data Source initialization", err)
        });

        await request(app).post("/clientes").send(mockedCliente);
        // const clienteLoginResponse = await request(app).post("/login").send(mockedClienteLogin);
        // await request(app).post("/contatos").set("Authorization", `Bearer ${clienteLoginResponse}`).send(mo)
    })

    afterAll(async() => {
        await connection.destroy()
    })

    test("POST /contatos - Must be able to create a contatos", async () => {
        const clienteLoginResponse = await request(app).post("/login").send(mockedClienteLogin);

        const response = await request(app).post("/contatos").set("Authorization", `Bearer ${clienteLoginResponse.body.token}`).send(mockedContato);

        expect(response.body).toHaveProperty("id")
        expect(response.body).toHaveProperty("name")
        expect(response.body).toHaveProperty("email")
        expect(response.body).toHaveProperty("phone")
        expect(response.body).toHaveProperty("isActive")
        expect(response.body).toHaveProperty("createdAt")
        expect(response.body.name).toEqual("Fuliano de Tal")
        expect(response.body.email).toEqual("fulan@mail.com")
        expect(response.body.isActive).toEqual(true)
        expect(response.status).toBe(201)
    })

    test("POST /contatos - Should not be able to create a contatosthat already exists", async () => {
        const clienteLoginResponse = await request(app).post("/login").send(mockedClienteLogin);
        const response = await request(app).post("/contatos").send(mockedContato)
        const createContatoRepeated = await request(app).post("/contatos").set("Authorization", `Bearer ${clienteLoginResponse.body.token}`).send(mockedContato);

        expect(response.body).toHaveProperty("message")
        expect(response.status).toBe(401)
    })

    test("GET /contatos - Must be able to list contatos",async () => {
        await request(app).post("/contatos").send(mockedContato)
        const contatosoginResponse = await request(app).post("/login").send(mockedClienteLogin);
        const response = await request(app).get("/contatos").set("Authorization", `Bearer ${contatosoginResponse.body.token}`)

        expect(response.body[0]).toHaveProperty("id")
        expect(response.body[0]).toHaveProperty("name")
        expect(response.body[0]).toHaveProperty("email")
        expect(response.body[0]).toHaveProperty("phone")
        expect(response.body[0]).toHaveProperty("isActive")
        expect(response.body[0]).toHaveProperty("createdAt")
        
        expect(response.body[0]).not.toHaveProperty("password")
    })

    test("GET /contatos - Should not be able to list contatos without authentication", async () =>{
        const response = await request(app).get("/contatos")

        expect(response.body).toHaveProperty("message")
        expect(response.status).toBe(401)
    })

    test("DELETE /contatos/:id - Should not be able to delete contatoswithout authentication", async() => {
        const contatosreatedTobeDeleted = await request(app).post("/contatos").send(mockedDeleteContato)
        

        const contatosoginResponse = await request(app).post("/login").send(mockedClienteLogin);
        
        const contatosryingDelete = await request(app).get('/contatos').set("Authorization", `Bearer ${contatosoginResponse.body.token}`)

        const response = await request(app).delete(`/contatos/${contatosreatedTobeDeleted.body.id}`)
        
        
        expect(response.body).toHaveProperty("message")
        expect(response.status).toBe(401)


     })

    test("DELETE /contatos/:id -  Must be able to soft delete contatos",async () => {
        await request(app).post('/contatos').send(mockedContato)

        const contatosoginResponse = await request(app).post("/login").send(mockedClienteLogin);
        const contatosobeDeleted = await request(app).post('/contatos').set("Authorization", `Bearer ${contatosoginResponse.body.token}`).send(mockedDeleteContato)
        
        
     
        
        const response = await request(app).delete(`/contatos/${contatosobeDeleted.body.id}`).set("Authorization", `Bearer ${contatosoginResponse.body.token}`)
        
        
        const findcontatos= await request(app).get('/contatos').set("Authorization", `Bearer ${contatosoginResponse.body.token}`)
        
        

        expect(response.status).toBe(204)
     
    })

    test("PATCH /contatos/:id -  should not be able to update contatoswithout authentication",async () => {
        const contatosoginResponse = await request(app).post("/login").send(mockedClienteLogin);
        const contatosobeDeleted = await request(app).get('/contatos').set("Authorization", `Bearer ${contatosoginResponse.body.token}`)
        const response = await request(app).patch(`/contatos/${contatosobeDeleted.body.id}`)

        expect(response.body).toHaveProperty("message")
        expect(response.status).toBe(401)
    })

    test("PATCH /contatos/:id -  should not be able to update contatoswithout authentication",async () => {
        const contatosoginResponse = await request(app).post("/login").send(mockedClienteLogin);
        const contatosobeDeleted = await request(app).get('/contatos').set("Authorization", `Bearer ${contatosoginResponse.body.token}`)
        const response = await request(app).patch(`/contatos/${contatosobeDeleted.body.id}`)

        expect(response.body).toHaveProperty("message")
        expect(response.status).toBe(401)
    })

    test("PATCH /contatos/:id - should not be able to update contatoswith invalid id",async () => {
        const newValues = {name: "Joana Brito", email: "joanabrito@mail.com"}

        const contatosoginResponse = await request(app).post("/login").send(mockedClienteLogin);
        const token = `Bearer ${contatosoginResponse.body.token}`
        
        const contatosobeUpdateRequest = await request(app).get("/contatos").set("Authorization", token)
        const contatosobeUpdateId = contatosobeUpdateRequest.body.id

        const response = await request(app).patch(`/contatos/13970660-5dbe-423a-9a9d-5c23b37943cf`).set("Authorization",token).send(newValues)

        expect(response.body).toHaveProperty("message")
        expect(response.status).toBe(404)
    })
    
    test("PATCH /contatos/:id - should not be able to update isActive field value",async () => {
        const newValues = {isActive: false}

        const contatosoginResponse = await request(app).post("/login").send(mockedClienteLogin);
        const token = `Bearer ${contatosoginResponse.body.token}`
        
        const contatosobeUpdateRequest = await request(app).get("/contatos").set("Authorization", token)
        const contatosobeUpdateId = contatosobeUpdateRequest.body.id

        const response = await request(app).patch(`/contatos/${contatosobeUpdateId}`).set("Authorization",token).send(newValues)
        expect(response.body).toHaveProperty("message")
        expect(response.status).toBe(401)
    })

    test("PATCH /contatos/:id - should not be able to update id field value",async () => {
        const newValues = {id: false}

        const contatosoginResponse = await request(app).post("/login").send(mockedClienteLogin);
        const token = `Bearer ${contatosoginResponse.body.token}`
        
        const contatosobeUpdateRequest = await request(app).get("/contatos").set("Authorization", token)
        const contatosobeUpdateId = contatosobeUpdateRequest.body.id

        const response = await request(app).patch(`/contatos/${contatosobeUpdateId}`).set("Authorization",token).send(newValues)
        expect(response.body).toHaveProperty("message")
        expect(response.status).toBe(401)
    })

    test("PATCH /contatos/:id -  should be able to update contatos",async () => {
        const contatosoupdate = await request(app).post("/contatos").send(mockedUpdateContato)

        const newValues = {name: "Beltrano de Brito", email: "beltrano_brito@mail.com"}

        const contatosoginResponse = await request(app).post("/login").send(mockedClienteLogin);
        const token = `Bearer ${contatosoginResponse.body.token}`

        const contatosobeUpdateRequest = await request(app).get("/contatos").set("Authorization", token)
        
        const contatosobeUpdateId = contatosobeUpdateRequest.body[0].id
        
        
        const response = await request(app).patch(`/contatos/${contatosobeUpdateId}`).set("Authorization",token).send(newValues)
        
        
        

        const contatospdated = await request(app).get("/contatos").set("Authorization", token)

        expect(response.status).toBe(200)
        expect(contatospdated.body[0].name).toEqual("Beltrano de Brito")
        expect(contatospdated.body[0]).not.toHaveProperty("password")
    }) 

})