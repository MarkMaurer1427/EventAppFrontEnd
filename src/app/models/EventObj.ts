export class EventObj
{
    id: number;
    name: string;
    description: string;
    category: string;
    startDate: Date;
    endDate: Date;
    location: string;
    allowReg: boolean;
    imageSrc: string;
    adultTicket: number;
    childTicket: number;

    constructor(id: number, name: string, description: string, category: string,
                startDate: Date, endDate: Date, location: string, allowReg: boolean,
                imgSrc: string, adultTicket: number, childTicket: number
                )
    {
        this.id = id;
        this.name = name;
        this.description = description;
        this.category = category;
        this.startDate = startDate;
        this.endDate = endDate;
        this.location = location;
        this.allowReg = allowReg;
        this.imageSrc = imgSrc;
        this.adultTicket = adultTicket;
        this.childTicket = childTicket;
    }



}