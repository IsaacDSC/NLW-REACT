import db from '../dbConfig'

const Orfanatos = db.define('orfanato', {
    name:{
        type: db.Sequelize.STRING,
    },
    latitude:{
        type: db.Sequelize.FLOAT,
    },
    longitude:{
        type: db.Sequelize.FLOAT,
    },
    about:{
        type: db.Sequelize.TEXT,
    },
    instructions:{
        type: db.Sequelize.TEXT,
    },
    open_on_weekends:{
        type: db.Sequelize.STRING(8),
    }

})

Orfanatos.sync({foce: true})

export default Orfanatos