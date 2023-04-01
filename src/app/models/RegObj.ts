export class RegObj{

    public constructor(init?: Partial<RegObj>) {
        Object.assign(this, init);
    }

    firstName!: string; 
    lastName!: string;
    email!: string;
    phone!: string;
    address!: string;
    numberAdults!: number;
    numberChild!: number;
}