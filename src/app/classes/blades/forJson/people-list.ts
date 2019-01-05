import * as people from '../../../json/blades/people.json';

export class PeopleList {
    // Variables
    public Book: string;
    public Pages: string;
    public Gender: string[];
    public Looks: string[];
    public Goals: string[];
    public Methods: string[];
    public CommonProfessions: string[];
    public RareProfessions: string[];
    public Heritages: string[];
    public Styles: string[];

    constructor() {
        const theCopy = JSON.parse(JSON.stringify(people)).default;

        this.Book = theCopy.Book;
        this.Pages = theCopy.Pages;
        this.Gender = theCopy.Gender;
        this.Looks = theCopy.Looks;
        this.Goals = theCopy.Goals;
        this.Methods = theCopy.Methods;
        this.CommonProfessions = theCopy.CommonProfessions;
        this.RareProfessions = theCopy.RareProfessions;
        this.Heritages = theCopy.Heritage;
        this.Styles = theCopy.Styles;
    }
}
