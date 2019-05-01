import {User} from './User';

export class UnsavedData{
    constructor(){
        this.Users=[];
    }
    public Users: User[];
    get returnCount() {
        return this.Users?this.Users.length:0;
    }; 
}