usuarios = [
    {
        idUsuario: 'a719194e-63da-4062-8b18-121a60b8444c',
        nombrecompleto:'Daniel Salva',
        nombre: 'Daniel',
        correo: 'ds@gmail.com',
        contrasenia: '123',
        fechanacimiento:'20/01/2004',
        numerocell:'14',
        tipoUsuario: 'PACIENTE'
    },
    {
        idUsuario: 'a719194e-63da-4062-8b18-121a60b8444d',
        nombre: 'Juanita',
        contrasenia: '123',
        tipoUsuario: 'ENFERMERA'
    },
    {
        idUsuario: 'a719194e-63da-4062-8b18-121a60b8444d',
        nombre: 'Juanita2',
        contrasenia: '123',
        tipoUsuario: 'ENFERMERA'
    }
]

citas = [
    {
        idcita:'d5f360e5-bce3-4895-81e2-916d4373094f',
        fecha:'27/10/2023',
        hora:'10 p.m.',
        motivo: 'nose',
    }
]

pedidos = [

]

medicinas = [
    {
        idMedicina: 'cf293c1b-2926-4107-89e2-71f684bfe30e',
        nombre:'Panadol',
        descripcion:'Se utiliza para el alivio sintomático del dolor ocasional moderado , como el dolor de cabeza, dental, muscular (contracturas) o de espalda, y estados febriles.',
        precio: 'Q'+10+'.00',
        cantidadDisp:5
    },
    {
        idMedicina: '794ef47b-1d76-4a8f-b856-13ab4512896f',
        nombre:'Omeprazol',
        descripcion:'se usa para tratar la acidez estomacal frecuente en adultos. El omeprazol pertenece a una clase de medicamentos llamados inhibidores de la bomba de protones.',
        precio: 'Q'+15.00+'.00',
        cantidadDisp:6
    },
    {
        idMedicina: '51b59891-8795-4d69-b0fd-6977a6f7268b',
        nombre:'Paracetamol',
        descripcion:'Es un analgésico y antipirético eficaz para el control del dolor leve o moderado causado por afecciones articulares, otalgias, cefaleas, neuralgias, procedimientos quirúrgicos menores etc',
        precio: 'Q'+5.00+'.00',
        cantidadDisp:10
    },
    {
        idMedicina: '50475279-e394-41d1-9da3-3290d65071ea',
        nombre:'Ramipril',
        descripcion:'Controla la hipertensión y la insuficiencia cardíaca, pero no las cura. Siga tomando el medicamento aunque se sienta mejor y no deje de tomarlo sin antes consultarlo con su médico..',
        precio: 'Q'+5.00+'.00',
        cantidadDisp:8
    },
    {
        idMedicina: '00ed3d67-3b58-41ed-8de0-908c3e698cc1',
        nombre:'Aspirina',
        descripcion:'Se usa para bajar la fiebre y aliviar el dolor leve a moderado causado por dolor de cabeza, , períodos menstruales, artritis, dolor en los dientes y dolores musculares.',
        precio: 'Q'+8+'.00',
        cantidadDisp:15
    },
    {
        idMedicina: 'f6fdfbc5-3f74-4e3f-b186-844c5aaeabf0',
        nombre:'Salbutamol',
        descripcion:'Produce alivio del ataque de asma al relajar los músculos lisos de las vías respiratorias. Se toma con un inhalador de dosis medida.',
        precio: 'Q'+7+'.00',
        cantidadDisp:16
    },
]

medicinasPedidos = [ 

]

module.exports = {
    usuarios,
    citas,
    pedidos,
    medicinas,
    medicinasPedidos
}