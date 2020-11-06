import React, { Component } from 'react';
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Col,
    FormGroup,
    Input,
    Label,
    ListGroup,
    ListGroupItem,
    Row,
} from 'reactstrap';


function ProjectItem(props) {
    const name = props.name;
    return (
        <ListGroupItem tag="button" type="button" className="list-group-item-action">{name}</ListGroupItem>
    );
}

function ProjectList(props) {
    const projects = props.projects;
    const listItems = projects.map((project) =>
      <ProjectItem name={project.name} key={project.id}  onclick={() => this.handleProjectClick(project)}/>  
    );
    
    return (
        <ListGroup className="list-group-flush">
            { listItems }
        </ListGroup>
    );
}

class NewProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project: {},
            isShow: false,
        }
    }
}

class EditProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project: null,
        }
    }

    handleSubmit(project) {
        console.log(project);
    }

    render() {
        return (
        <Card>
            <CardHeader>
                <strong>Edit project</strong>
            </CardHeader>
            <CardBody>
                <FormGroup>
                    <Label htmlFor="company">Name</Label>
                    <Input type="text" id="project-name" value={this.state.project.name} 
                        onChange={this.handleSubmit} placeholder="Enter project name" />
                </FormGroup>
            </CardBody>
            <CardFooter>
                <Button type="submit" size="sm" color="primary">Submit</Button>
            </CardFooter>
        </Card>
        );``
    }
}

class ProjectsPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: {},
            isLoaded: false,
            error: null,
            projectName: '',
            editProject: null,
        };
        this.handleProjectClick = this.handleProjectClick.bind(this);
    }

    componentDidMount() {
        fetch('http://localhost:5000/api/1/projects/')
            .then((response) => response.json())
            .then((response) => {                
                this.setState({data: response});
                this.setState({isLoaded: true});
            })
            .then((error) => {
                this.setState({isLoaded: true});
                this.setState({error: error});
            })
    }
    
    handleProjectClick(project) {
        this.setState({'project': project});
    }

    handleProjectNameChange(project) {
        console.log(project);
    }

    handleEditProject(project) {
        this.setState('editProject', project)
    }

    render() {
        const { data, isLoaded, error, projectName, editProject } = this.state;
        if (!isLoaded) return <div></div>;
        if (error) return <div>{'Error: ${e.message}'}</div>;
        return (
            <div className="animated fadeIn mt-3">
                <Row>
                    <Col xs="12" sm="6">
                        <Card>
                            <CardHeader>
                                <i className="fa fa-align-justify"></i><strong>Projects</strong>
                            </CardHeader>
                            <CardBody>
                                <ProjectList projects={data}/>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs="12" sm="6">
                        {!!editProject &&
                            <EditProject project={editProject}/>
                        }
                    </Col>
                </Row>
            </div >
        )
    }
}

export default ProjectsPage;