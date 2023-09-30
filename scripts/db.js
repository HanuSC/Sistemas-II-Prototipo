function DB() {}

DB.data = {
    relations: {
        debt_status: ["Cancelada", "Pendiente", "Anulada"],
        user_status: ["Activo", "Inactivo"],
        change_status: ["Realizados", "Pendiente", "Descartados"],
        payment_type: ["Contado", "Crédito"],
        sex: ["Masculino", "Femenino"]
    },
    states: [
        {
            "id": "0",
            "state_name": "Amazonas"
        },
        {
            "id": "1",
            "state_name": "Anzoategui"
        },
        {
            "id": "2",
            "state_name": "Apure"
        },
        {
            "id": "3",
            "state_name": "Aragua"
        },
        {
            "id": "4",
            "state_name": "Barinas"
        },
        {
            "id": "5",
            "state_name": "Bolívar"
        },
        {
            "id": "6",
            "state_name": "Carabobo"
        },
        {
            "id": "7",
            "state_name": "Cojedes"
        },
        {
            "id": "8",
            "state_name": "Delta Amacuro"
        },
        {
            "id": "9",
            "state_name": "Falcón"
        },
        {
            "id": "10",
            "state_name": "Guárico"
        },
        {
            "id": "11",
            "state_name": "Lara"
        },
        {
            "id": "12",
            "state_name": "Mérida"
        },
        {
            "id": "13",
            "state_name": "Miranda"
        },
        {
            "id": "14",
            "state_name": "Monagas"
        },
        {
            "id": "15",
            "state_name": "Nueva Esparta"
        },
        {
            "id": "16",
            "state_name": "Portuguesa"
        },
        {
            "id": "17",
            "state_name": "Sucre"
        },
        {
            "id": "18",
            "state_name": "Táchira"
        },
        {
            "id": "19",
            "state_name": "Trujillo"
        },
        {
            "id": "20",
            "state_name": "Yaracuy"
        },
        {
            "id": "21",
            "state_name": "Zulia"
        },
        {
            "id": "22",
            "state_name": "Dependencias Federales"
        },
        {
            "id": "23",
            "state_name": "Distrito Federal"
        },
        {
            "id": "24",
            "state_name": "Vargas"
        },
    ],
    collection_tables: [
        {
            "user_id": "28019240",
            "invoice_number": "FAC124",
            "client_rif": "J-12345678",
            "exchange_rate": "33",
            "dollar_amount": "3000",
            "bolivar_amount": "4200000",
            "remaining_debt": "0",
            "payment_type": "0",
            "debt_status": "0",
            "observation": "Pago adelantado",
            "creation_date": "2023-7-10",
            "expiration_date": "2023-9-30"
        },
        {
            "user_id": "28204620",
            "invoice_number": "FAC125",
            "client_rif": "J-12345671",
            "exchange_rate": "33",
            "dollar_amount": "3000",
            "bolivar_amount": "4200000",
            "remaining_debt": "0",
            "payment_type": "0",
            "debt_status": "0",
            "observation": "Pago adelantado",
            "creation_date": "2023-6-10",
            "expiration_date": "2023-9-28"
        },
        {
            "user_id": "28019240",
            "invoice_number": "FAC126",
            "client_rif": "J-12345672",
            "exchange_rate": "33",
            "dollar_amount": "3000",
            "bolivar_amount": "4200000",
            "remaining_debt": "0",
            "payment_type": "0",
            "debt_status": "0",
            "observation": "Pago adelantado",
            "creation_date": "2023-5-10",
            "expiration_date": "2023-9-30"
        },
        {
            "user_id": "28019240",
            "invoice_number": "FAC127",
            "client_rif": "J-12345673",
            "exchange_rate": "33",
            "dollar_amount": "3000",
            "bolivar_amount": "4200000",
            "remaining_debt": "0",
            "payment_type": "0",
            "debt_status": "0",
            "observation": "Pago adelantado",
            "creation_date": "2023-9-6",
            "expiration_date": "2023-9-30"
        },
        {
            "user_id": "28204620",
            "invoice_number": "FAC127",
            "client_rif": "J-12345623",
            "exchange_rate": "33",
            "dollar_amount": "680",
            "bolivar_amount": "44500",
            "remaining_debt": "0",
            "payment_type": "0",
            "debt_status": "0",
            "observation": "Pago adelantado",
            "creation_date": "2023-9-6",
            "expiration_date": "2023-9-30"
        },
        {
            "user_id": "28204620",
            "invoice_number": "FAC127",
            "client_rif": "J-12345615",
            "exchange_rate": "33",
            "dollar_amount": "200",
            "bolivar_amount": "80000",
            "remaining_debt": "0",
            "payment_type": "1",
            "debt_status": "1",
            "observation": "Pago adelantado",
            "creation_date": "2023-9-6",
            "expiration_date": "2023-9-29"
        },
        {
            "user_id": "28204620",
            "invoice_number": "FAC127",
            "client_rif": "J-12345647",
            "exchange_rate": "33",
            "dollar_amount": "1000",
            "bolivar_amount": "150000",
            "remaining_debt": "0",
            "payment_type": "1",
            "debt_status": "1",
            "observation": "Pago adelantado",
            "creation_date": "2023-9-6",
            "expiration_date": "2023-9-30"
        },
        {
            "user_id": "28204620",
            "invoice_number": "FAC127",
            "client_rif": "J-12345692",
            "exchange_rate": "33",
            "dollar_amount": "5000",
            "bolivar_amount": "4200",
            "remaining_debt": "0",
            "payment_type": "1",
            "debt_status": "2",
            "observation": "Pago adelantado",
            "creation_date": "2023-9-6",
            "expiration_date": "2023-9-29"
        }
    ],
    collection_tables_changes: [
        {
            "id": "0",
            "change_status": "1",
            "user_id": "28204620",
            "invoice_number": "FAC125",
            "client_rif": "J-12345671",
            "exchange_rate": "33",
            "dollar_amount": "3000",
            "bolivar_amount": "4200000",
            "remaining_debt": "0",
            "payment_type": "0",
            "debt_status": "0",
            "observation": "Pago adelantado",
            "creation_date": "2023-6-10",
            "expiration_date": "2023-9-30",
            "request_date": "2023-9-28"
        }
    ],
    reminders: [
        {
            "id": "0",
            "to_user_id": "28204620",
            "by_user_id": "28019240",
            "message": "mensaje de recordatorio, alguna cosa",
            "execute_date": "2023-9-28"
        }
    ],
    employees: [
        {
            "user_id": "28019240",
            "name": "alirio",
            "surname": "freytez",
            "phone_number": "+4121112233",
            "email": "email@domain.com",
            "sex": "0",
            "position": "0",
            "entry_date": "2023-8-14",
            "exit_date": "",
            "status": "0"
        },
        {
            "user_id": "28204620",
            "name": "anthony",
            "surname": "moreno",
            "phone_number": "+58123465975",
            "email": "antho@algo.com",
            "sex": "1",
            "position": "1",
            "entry_date": "2023-8-14",
            "exit_date": "",
            "status": "0"
        }
    ],
    user_access: [
        {
            "user_id": "28019240",
            "password": "clave123",
            "creation_date": "2023-9-14"
        },
        {
            "user_id": "28204620",
            "password": "clave123",
            "creation_date": "2023-9-14"
        }
    ],
    positions: [
        {
            "id": "0",
            "position_name": "Administrador"
        },
        {
            "id": "1",
            "position_name": "Vendedor"
        }
    ],
    clients: [
        {
            "client_rif": "J-12345678",
            "client_name": "Farmacia Santander",
            "state": "0"
        },
        {
            "client_rif": "J-12345671",
            "client_name": "Farmacia San Cristobal",
            "state": "1"
        },
        {
            "client_rif": "J-12345672",
            "client_name": "Farmacia San Agustin",
            "state": "2"
        },
        {
            "client_rif": "J-12345673",
            "client_name": "Farmacia Colondrina",
            "state": "3"
        },
        {
            "client_rif": "J-12345623",
            "client_name": "Farmacia Girasol",
            "state": "4"
        },
        {
            "client_rif": "J-12345615",
            "client_name": "Farmatodo",
            "state": "5"
        },
        {
            "client_rif": "J-12345647",
            "client_name": "Farmacia San Ignacio",
            "state": "6"
        },
        {
            "client_rif": "J-12345692",
            "client_name": "Farmacia Nuevo Siglo",
            "state": "7"
        }
    ]
};

DB.initialized = false;
DB.ini = function() {
    DB.initialized = true;

    if (localStorage.getItem("data") != undefined)
        return true;

    localStorage.setItem("data", JSON.stringify(DB.data));
    return true;
}
DB.getIndex = function({ table, condition }) {
    if (!DB.initialized)
        return DB.ini();

    if (condition != undefined) {
        const conditions = Object.entries(condition);
        const data = JSON.parse(localStorage.getItem("data"))[table];
        const index = data.findIndex(row => {
            const result = conditions.map(([ key, value ]) => row[key] == value)
            return !result.some(e => e == false);
        });

        return index;
    }
}
DB.interpolate = function({ type, value }) {
    return DB.get({ table: "relations" })[type][value];
}
DB.get = function({ table, condition, key }) {
    if (!DB.initialized)
        return DB.ini();
    
    let data = JSON.parse(localStorage.getItem("data"));

    if (Array.isArray(data[table]))
        data = condition != undefined ? data[table][DB.getIndex({ table, condition })] : data[table];
    else {
        data = key != undefined ? data[table][key] : data[table];
    }

    return data;
}
DB.post = function({ table, condition, data }) {
    if (!DB.initialized)
        return DB.ini();

    const DBData = JSON.parse(localStorage.getItem("data"));
    const index = DB.getIndex({ table, condition });
    
    Object.entries(data).forEach(([ key, value ]) => DBData[table][index][key] = value);
    localStorage.setItem("data", JSON.stringify(DBData));

    return true;
}
DB.put = function({ table, data }) {
    if (!DB.initialized)
        return DB.ini();

    const condition = {
        collection_tables: (data) => ({
            user_id: data.user_id,
            invoice_number: data.invoice_number,
            client_rif: data.client_rif
        }),
        user_access: (data) => ({
            user_id: data.user_id
        }),
        employees: (data) => ({
            user_id: data.user_id
        }),
        reminders: (data) => ({
            id: data.id
        }),
        positions: (data) => ({
            id: data.id
        }),
        clients: (data) => ({
            client_rif: data.client_rif
        }),
        collection_tables_changes: (data) => ({
            id: data.id
        })
    }[table](data);

    const DBData = JSON.parse(localStorage.getItem("data"));
    const index = DB.getIndex({ table, condition });

    if (index !== -1)
        return false;

    DBData[table].push(data);
    localStorage.setItem("data", JSON.stringify(DBData));

    return true;
}
DB.delete = function({ table, condition }) {
    if (!DB.initialized)
        return DB.ini();

    
    const DBData = JSON.parse(localStorage.getItem("data"));
    const index = DB.getIndex({ table, condition });
    
    if (index === -1)
        return false;
    else if (index == 0)
        DBData[table].shift(index);
    else if (index == DBData[table].length-1)
        DBData[table] = DBData[table].slice(0, index);
    else
        DBData[table] = DBData[table].slice(0, index).concat(DBData[table].slice(index+1));

    localStorage.setItem("data", JSON.stringify(DBData));

    return true;
}

export default DB;