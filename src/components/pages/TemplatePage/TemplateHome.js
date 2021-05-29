import React, {Component, } from 'react';
import './TemplatePage.css'
import TemplateContent from '../../../static/template-content.js'

export default class TemplateHome extends Component {
    render() {
        
        return <div className='container'>
            <h1 className='title'>Useful Email Templates</h1>
            <h4 className='templateTypeTitle'>Landlord {'&'} Tenant Templates</h4>
            <div className='containerAllTemplates'>
            {TemplateContent.templateData.filter(eachTemplateData => 
                eachTemplateData.templateType === 'tenant').map((eachTemplateData) => (
                    
                    <div className='templateContainer'>
                        <a className='anchor' href={eachTemplateData.templateLink}>
                        <p className='templateTitle'>{eachTemplateData.templateTitle}</p>
                        </a>
                    </div>
                
            ))}
            </div>
            <h4 className='templateTypeTitle'>Employment Law Template</h4>
            <div className='containerAllTemplates'>
            {TemplateContent.templateData.filter(eachTemplateData => 
                eachTemplateData.templateType === 'employment').map((eachTemplateData) => (
                    
                    <div className='templateContainer'>
                        <a className='anchor' href={eachTemplateData.templateLink}>
                        <p className='templateTitle'>{eachTemplateData.templateTitle}</p>
                        </a>
                    </div>
                
            ))}
            </div>
            <h4 className='templateTypeTitle'>Immigration Template</h4>
            <div className='containerAllTemplates'>
            {TemplateContent.templateData.filter(eachTemplateData => 
                eachTemplateData.templateType === 'immigration').map((eachTemplateData) => (
                    
                    <div className='templateContainer'>
                        <a className='anchor' href={eachTemplateData.templateLink}>
                        <p className='templateTitle'>{eachTemplateData.templateTitle}</p>
                        </a>
                    </div>
                
            ))}
            </div>
        </div>
    }
    
}