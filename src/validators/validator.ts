
class Validator { 

    error: any[];

    constructor() {
        this.error = []
    }

    isRequired (value: any, message: any){
        if (!value || value.length <= 0) {
            this.error.push({ message });
        }
    };

    ValidationContract() {
        this.error = [];
    }
        
    hasMinLen(value : any, min : any, message: any){
        if (!value || value.length <= min) {
            this.error.push({ message });
        }
    };
    
    hasMaxLen(value : any, max : any, message: any){
        if (!value || value.length <= max) {
            this.error.push({ message });
        }
    };
    
    isFixedLen(value : any, len : any, message: any){
        if (value.length != len) {
            this.error.push({ message });
        }
    };
    
    errors(){
        return this.error;
    };
    
    clear(){
        this.error = [];
    };
    
    isValid(){
        return this.error.length === 0;
    };
}

export default Validator;