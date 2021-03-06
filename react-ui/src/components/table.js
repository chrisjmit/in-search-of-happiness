import React, { Component } from 'react';
import Company from './company';

class Table extends Component {
  state = {companies: []}

  componentDidMount() {
    fetch('/api/companies')
      .then(res => res.json())
      .then(companies => this.setState({ companies }));
  }

  render() {
    const companies = this.state.companies;
    const companySector = this.props.match.params.sector;

    return (
      <div id={'companyData'}>
        <h2>{companySector} Companies</h2>
        <table className='ui structured large table'>
          <thead>
            <tr>
              <td> </td>
              <td>Company Name</td>
              <td>Glassdoor Rating</td>
              <td>Website</td>
              <td>Industry</td>
            </tr>
          </thead>
          <tbody>
          {companies.map((company) => {
            if (company.overallRating > '3.0' && company.sectorName === companySector) {
              return (<Company data={company}/>);
            }
          })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
