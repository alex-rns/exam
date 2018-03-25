import React from 'react';
import Select from "../../atoms/Select/Select";
import './Workflow.css'
import DNDWrap from "../../organisms/DND/DNDWrap/DNDWrap";


class Workflow extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      tab: 'workflowAllProjectTab'
    }
  }

  tabChange = (value) => {
    this.setState({
      tab: value
    })
  };

  render() {

    const workflowProject = {
      list: ["All", "Microsoft", "Google", "Symu.co", "JCD.pl", "Facebook", "Themeforest"],
      label: 'Show projects'
    };

    return (
      <div className="Workflow">
        <div className="workflow-header">
          <div className="workflow-tab">
            <a
              className={this.state.tab === 'workflowDndTab'
                ? 'workflowTab-active'
                : 'workflowTab'}
              onClick={() => this.tabChange('workflowDndTab')}
            >All Projects</a>
            <a
              className={this.state.tab === 'workflowAllProjectTab'
                ? 'workflowTab-active'
                : 'workflowTab'}
              onClick={() => this.tabChange('workflowAllProjectTab')}
            >Workflow</a>
          </div>
          <Select data={workflowProject}/>
        </div>

        <div>
          {this.state.tab === 'workflowDndTab'
            ? <DNDWrap/>
            : <div>2</div>
          }
        </div>

      </div>
    )
  }
}

export default Workflow;