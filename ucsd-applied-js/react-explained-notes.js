class Example extends Component { 
    
    constructor(args) { 
        super(args); 
        this.state = {message: 'A message in state' }; 
        }   
    
    render() { return `Message: ${this.state.message}`; } 
}