
const Paciente = () => {
    return (
        <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Nombre: {''}
                <span className="font-normal normal-case">Hook</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Propietario: {''}
                <span className="font-normal normal-case">Benja</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Email: {''}
                <span className="font-normal normal-case">Benja@gmail.com</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Fecha Alta: {''}
                <span className="font-normal normal-case">10 diciembre 2022</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Sintomas: {''}
                <span className="font-normal normal-case">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reiciendis cumque odio id dolor amet excepturi nisi possimus,
                    accusantium asperiores. Accusamus autem ut architecto numquam. Ut quod voluptatem nostrum commodi officia.
                </span>
            </p>
        </div>
    )
}

export default Paciente
