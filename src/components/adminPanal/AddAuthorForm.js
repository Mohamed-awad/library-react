import React , {Component} from 'react';
import {Button, Form, FormGroup, Input, Label, ModalBody, ModalFooter, ModalHeader, Table} from "reactstrap";
import {Modal} from "reactstrap"
// import GetAuthors from "../service/author";
// import AddAuthor from "../service/addAuthor";
// import DeleteAuthor from "../service/delAuthor";
// import EditAuthor from "../service/editAuthor";

class AddAuthorForm extends Component {

    constructor(props) {
        super(props);
        this.state={
          modalIsOpen: false,
          authors: [],
          newAuthor: "",
        };
        this.handle_modal = this.handle_modal.bind(this);
        this.handling_modal = this.handling_modal.bind(this);
    }
    handle_modal() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }


    handling_modal(event) {
      this.handle_updateAuthor(event);
        this.setState(prevState => ({
            EditModal: !prevState.EditModal
        }));
    }
    componentDidMount(){
      // GetAuthors()
      // .then(data => {
      //   this.setState({
      //       authors: data,
      //   })
      // });
    }

    handle_updateAuthor =(event)=>{
      if(event.target.name === "edit") {
          let data = JSON.parse(event.target.value);
            this.setState({
              newAuthor: data,
            });
        }
      if(event.target.name === "firstname") {
            this.setState({
                newAuthor: {...this.state.newAuthor, firstName: event.target.value,}
            });
        } else if(event.target.name === "lastname") {
          this.setState({
            newAuthor: {...this.state.newAuthor, lastName: event.target.value,}
          });
        } else if(event.target.name === "dateofbirth") {
            console.log(event.target.value);
            this.setState({
              newAuthor: {...this.state.newAuthor, dateOfBirth: event.target.value,}
            });
        } else if(event.target.name === "file") {
            let path = event.target.files[0];
            console.log(path);
            this.setState({
                newAuthor: {...this.state.newAuthor, photo: path,}
            });
        }

    }
    handle_addAuthor =()=>{
        if(!this.state.newAuthor.lastName ||
            (/^ *$/.test(this.state.newAuthor.lastName)) ||
            (/^$/.test(this.state.newAuthor.lastName)) ||
        !this.state.newAuthor.firstName ||
            (/^ *$/.test(this.state.newAuthor.firstName)) ||
            (/^$/.test(this.state.newAuthor.firstName))) {
            alert("please enter valid author first name and valid last name");
        }
        else {
          console.log(this.state.newAuthor);
          // AddAuthor(this.state.newAuthor).then(data => {
          //   console.log(data);
          //   GetAuthors()
          //       .then(data => {
          //         this.setState({
          //           authors: data,
          //           newAuthor: "",
          //         });
          //         alert("New Author added successfully");
          //       });
          // });
        }
    }

    handle_EditAuthor =()=>{
        console.log(this.state.newAuthor);
        // EditAuthor(this.state.newAuthor).then(data => {
        //   console.log(data);
        //     GetAuthors()
        //     .then(data => {
        //         this.setState({
        //             authors: data,
        //             newAuthor : "",
        //         });
        //     });
        // });
    }

    deletRow = (index) =>{
        const authors = [...this.state.authors];
        console.log(authors[index.target.value]._id);
        // DeleteAuthor(authors[index.target.value]._id).then((data) => {
        //     console.log(data);
        //     GetAuthors().then(data => {
        //     this.setState({
        //       authors: data,
        //       newAuthor : "",
        //     });
        //   });
        // });

    }

    render() {
        return (
            <div>
                <button onClick={this.handle_modal} className='btn btn-info offset-lg-10  offset-md-10  offset-sm-10  offset-xs-10 add_category'>{this.props.title} +</button>
                <Modal isOpen={this.state.modal} toggle={this.handle_modal} className={this.props.className}>
                    <ModalHeader toggle={this.handle_modal}>{this.props.title}</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label for="name">{this.props.first}</Label>
                                <Input type="name" name="firstname" id="fname"
                                onChange={this.handle_updateAuthor}
                                       placeholder="UserName" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="name">{this.props.second}</Label>
                                <Input type="name" name="lastname" id="lname"
                                onChange={this.handle_updateAuthor}
                                       placeholder="Name" />
                            </FormGroup>
                            <FormGroup>
                            <Input type="name" name="Phone" id="lname"
                                onChange={this.handle_updateAuthor}
                                       placeholder="Phone" />
                            </FormGroup>
                            <FormGroup>
                            <Input type="name" name="ssm" id="lname"
                                onChange={this.handle_updateAuthor}
                                       placeholder="SSN" />
                            </FormGroup>
                            <FormGroup>
                            <Input type="name" name="Email" id="lname"
                                onChange={this.handle_updateAuthor}
                                       placeholder="Email" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleFile">Upload Image</Label>
                                <Input type="file" name="file" id="exampleFile"
                                onChange={this.handle_updateAuthor}/>
                            </FormGroup>
                        </Form>

                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.handle_modal}
                                onClick={this.handle_addAuthor} >{this.props.title}</Button>{' '}
                        <Button color="secondary" onClick={this.handle_modal}>{this.props.cancel}</Button>
                    </ModalFooter>
                </Modal>


                <Modal isOpen={this.state.EditModal} toggle={this.handling_modal} className={this.props.className}>
                    <ModalHeader toggle={this.handling_modal}>Edit Author</ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Input type="name" name="firstname" id="name"
                                   placeholder="First Name"
                                   value={this.state.newAuthor.firstName}
                                   onChange={this.handle_updateAuthor}/>
                        </FormGroup>
                       <FormGroup>
                            <Input type="name" name="lastname" id="name"
                                   placeholder="Last Name"
                                   value={this.state.newAuthor.lastName}
                                   onChange={this.handle_updateAuthor}/>
                        </FormGroup>
                      <FormGroup>
                                <input type="date" name="dateofbirth" id="dateofbirth"
                                       value={this.state.newAuthor.dateOfBirth}
                                onChange={this.handle_updateAuthor}/>
                            </FormGroup>
                       <FormGroup>
                                <Label for="exampleFile">Upload Image</Label>
                                <Input type="file" name="file" id="exampleFile"
                                onChange={this.handle_updateAuthor}/>
                            </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.handling_modal}
                                onClick={this.handle_EditAuthor} color="primary"
                                 >Edit</Button>{' '}
                        <Button color="secondary" onClick={this.handling_modal}>Cancel</Button>
                    </ModalFooter>
                </Modal>

                <Table>
                    <thead>
                    <tr>
                        <th>User Name</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Ssn</th>
                        <th>isAdmin</th>
                        <th>IsActive</th>
                        <th>Email</th>
                        <th>Image</th>
                        <th>Actions</th>

                    </tr>
                    </thead>
                    <thead>
                    {this.state.authors.map((author , index) =>
                        <tr>
                            <th>{index+1}</th>
                            <th key={index}>
                                <img src={"http://localhost:4000/"+author.photo}
                                     width="50" height="50" alt="error image"/>
                            </th>
                            <th>
                                {author.firstName}
                            </th>
                            <th>
                                {author.lastName}
                            </th>
                            <th>
                                {author.dateOfBirth.substr(0, 10)}
                            </th>
                            <th>
                                <button value={JSON.stringify(author)} type="button"
                                        className="btn btn-info" name="edit"
                                        onClick={this.handling_modal}>Edit</button> {" "}

                                <button value= {index} onClick={this.deletRow.bind(this)}
                                    type="button" className="btn btn-danger">Delete</button>
                            </th>
                        </tr>)}
                    </thead>
                </Table>


            </div>);
    }
}
export default AddAuthorForm;
