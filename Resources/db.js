var DB = {
    INSERT: 1,
    UPDATE: 2,
    init: function(_callback) {
        var db = Ti.Database.open("AlertID_DB");
        db.execute("CREATE TABLE IF NOT EXISTS members(id INTEGER PRIMARY KEY, token TEXT, f_name TEXT, l_name TEXT, m_name TEXT, n_name TEXT, birthdate TEXT, gender TEXT, height TEXT, weight TEXT, hair TEXT, eye TEXT, birthcity TEXT, glasses TEXT, marks TEXT, address1 TEXT, address2 TEXT, city TEXT, state TEXT, zip TEXT, h_phone TEXT, cell_phone TEXT, name1 TEXT, phone1 TEXT, name2 TEXT, phone2 TEXT, m_photo TEXT,blobimage BLOB,type INTEGER);");
        db.close();
        _callback();
    },
    insertRecord: function(_insert, _callback) {
        try {
            var db = Ti.Database.open("AlertID_DB");
            db.execute("INSERT INTO members (token,f_name,l_name,m_name,n_name,birthdate,gender,height,weight,hair,eye,birthcity,glasses,marks,address1,address2,city,state,zip,h_phone,cell_phone,name1,phone1,name2,phone2,m_photo,blobimage,type) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", _insert.token, _insert.f_name, _insert.l_name, _insert.m_name, _insert.n_name, _insert.birthdate, _insert.gender, _insert.height, _insert.weight, _insert.hair, _insert.eye, _insert.birthcity, _insert.glasses, _insert.marks, _insert.address1, _insert.address2, _insert.city, _insert.state, _insert.zip, _insert.h_phone, _insert.cell_phone, _insert.name1, _insert.phone1, _insert.name2, _insert.phone2, _insert.m_photo, _insert.blobimage, _insert.type);
            var lastID = db.lastInsertRowId;
            db.close();
            _callback();
        } catch (e) {
            alert(e.message);
        }
        return lastID;
    },
    updateRecord: function(_insert, _callback) {
        var db = Ti.Database.open("AlertID_DB");
        db.execute("UPDATE members SET f_name=?,l_name=?,m_name=?,n_name=?,birthdate=?,gender=?,height=?,weight=?,hair=?,eye=?,birthcity=?,glasses=?,marks=?,address1=?,address2=?,city=?,state=?,zip=?,h_phone=?,cell_phone=?,name1=?,phone1=?,name2=?,phone2=?,m_photo=?,blobimage=?,type=? WHERE id=?", _insert.f_name, _insert.l_name, _insert.m_name, _insert.n_name, _insert.birthdate, _insert.gender, _insert.height, _insert.weight, _insert.hair, _insert.eye, _insert.birthcity, _insert.glasses, _insert.marks, _insert.address1, _insert.address2, _insert.city, _insert.state, _insert.zip, _insert.h_phone, _insert.cell_phone, _insert.name1, _insert.phone1, _insert.name2, _insert.phone2, _insert.m_photo, _insert.blobimage, _insert.type, _insert.id);
        db.close();
        _callback();
    },
    deleteRecord: function(_id, _callback) {
        var db = Ti.Database.open("AlertID_DB");
        db.execute("DELETE FROM members WHERE id=?", _id);
        db.close();
        _callback();
    },
    getMembers: function(_token, _callback) {
        var db = Ti.Database.open("AlertID_DB");
        var result = db.execute("SELECT id,f_name,l_name,m_name,n_name,birthdate,gender,height,weight,hair,eye,birthcity,glasses,marks,address1,address2,city,state,zip,h_phone,cell_phone,name1,phone1,name2,phone2,m_photo,blobimage,type FROM members WHERE token=?", _token);
        var membersArr = [];
        while (result.isValidRow()) {
            membersArr.push({
                id: result.fieldByName("id"),
                f_name: result.fieldByName("f_name"),
                l_name: result.fieldByName("l_name"),
                m_name: result.fieldByName("m_name"),
                n_name: result.fieldByName("n_name"),
                birthdate: result.fieldByName("birthdate"),
                gender: result.fieldByName("gender"),
                height: result.fieldByName("height"),
                weight: result.fieldByName("weight"),
                hair: result.fieldByName("hair"),
                eye: result.fieldByName("eye"),
                birthcity: result.fieldByName("birthcity"),
                glasses: result.fieldByName("glasses"),
                marks: result.fieldByName("marks"),
                address1: result.fieldByName("address1"),
                address2: result.fieldByName("address2"),
                city: result.fieldByName("city"),
                state: result.fieldByName("state"),
                zip: result.fieldByName("zip"),
                h_phone: result.fieldByName("h_phone"),
                cell_phone: result.fieldByName("cell_phone"),
                name1: result.fieldByName("name1"),
                phone1: result.fieldByName("phone1"),
                name2: result.fieldByName("name2"),
                phone2: result.fieldByName("phone2"),
                m_photo: result.fieldByName("m_photo"),
                blobimage: result.fieldByName("blobimage"),
                type: result.fieldByName("type")
            });
            result.next();
        }
        result.close();
        db.close();
        _callback(membersArr);
        return membersArr;
    },
    getMember: function(_id, _callback) {
        var db = Ti.Database.open("AlertID_DB");
        var result = db.execute("SELECT id,f_name,l_name,m_name,n_name,birthdate,gender,height,weight,hair,eye,birthcity,glasses,marks,address1,address2,city,state,zip,h_phone,cell_phone,name1,phone1,name2,phone2,m_photo,blobimage,type FROM members WHERE id = ? ", _id);
        var memberArr = [];
        while (result.isValidRow()) {
            memberArr.push({
                id: result.fieldByName("id"),
                f_name: result.fieldByName("f_name"),
                l_name: result.fieldByName("l_name"),
                m_name: result.fieldByName("m_name"),
                n_name: result.fieldByName("n_name"),
                birthdate: result.fieldByName("birthdate"),
                gender: result.fieldByName("gender"),
                height: result.fieldByName("height"),
                weight: result.fieldByName("weight"),
                hair: result.fieldByName("hair"),
                eye: result.fieldByName("eye"),
                birthcity: result.fieldByName("birthcity"),
                glasses: result.fieldByName("glasses"),
                marks: result.fieldByName("marks"),
                address1: result.fieldByName("address1"),
                address2: result.fieldByName("address2"),
                city: result.fieldByName("city"),
                state: result.fieldByName("state"),
                zip: result.fieldByName("zip"),
                h_phone: result.fieldByName("h_phone"),
                cell_phone: result.fieldByName("cell_phone"),
                name1: result.fieldByName("name1"),
                phone1: result.fieldByName("phone1"),
                name2: result.fieldByName("name2"),
                phone2: result.fieldByName("phone2"),
                m_photo: result.fieldByName("m_photo"),
                blobimage: result.fieldByName("blobimage"),
                type: result.fieldByName("type")
            });
            result.next();
        }
        result.close();
        db.close();
        _callback();
        return memberArr;
    }
};

module.exports = DB;