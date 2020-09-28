class Position{
    constructor(id, name, badge){
        this.id = id;
        this.positionName = name;
        this.badge = badge;
    }
}

let positions = [
    new Position(1, "GK", "warning"),
    new Position(2, "CB", "info"),
    new Position(3, "LB", "info"),
    new Position(4, "RB", "info"),
    new Position(5, "LWB", "info"),
    new Position(6, "RWB", "info"),
    new Position(7, "SW", "info"),
    new Position(8, "DMF", "success"),
    new Position(9, "CMF", "success"),
    new Position(10, "AMF", "success"),
    new Position(11, "LMF", "success"),
    new Position(12, "RMF", "success"),
    new Position(13, "CF", "primary"),
    new Position(14, "ST", "primary"),
    new Position(15, "SS", "primary")
];
