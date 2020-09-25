class Formation{
    constructor(id, name){
        this.id = id;
        this.name = name;
    }
}

let formations = [
    new Formation(1, "4-4-2"),
    new Formation(2, "4-3-1-2"),
    new Formation(3, "4-4-1-1"),
    new Formation(4, "4-2-1-3"),
    new Formation(5, "4-5-1"),
    new Formation(6, "4-1-2-3"),
    new Formation(7, "4-3-3"),
    new Formation(8, "4-3-2-1"),
    new Formation(9, "3-4-1-2"),
    new Formation(10, "3-3-2-2"),
    new Formation(11, "3-4-3"),
    new Formation(12, "5-4-1")
];

class MappingFormationPosition{
    constructor(id, formationId, positionId){
        this.id = id;
        this.formationId = formationId;
        this.positionId = positionId;
    }
}
