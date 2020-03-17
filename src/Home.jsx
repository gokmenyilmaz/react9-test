import React, { Component } from 'react'
import ReactQuill, {Quill}  from 'react-quill'
import If,{Ifc} from './RcIf'
import { Tabs } from 'antd';
import 'antd/dist/antd.css';


import 'react-quill/dist/quill.snow.css'; // ES6


const { TabPane } = Tabs;


export default class Home extends Component {
   
    constructor(props) {
        super(props)
        this.state = { text: '' } 
        this.handleChange = this.handleChange.bind(this)

      
      }

      modules = {
       
        toolbar: [
          [{ 'header': [1, 2, false] }],
          ['bold', 'italic', 'underline','strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
          ['link', 'image'],
          ['clean']
        ],
      }
    
      formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
      ];
    
      
      handleChange(value) {
        this.setState({ text: value })
      }
    
      render() {

        var idariMi=false;

        return (
          <If boolean={true}>
            <Tabs defaultActiveKey="1">
              <TabPane tab="Tab 1" key="1">
                Tab 1 - Yeniversion
              </TabPane>

         
            {
              idariMi &&
              <TabPane tab="Tab 2"  key="2">
                Tab 2
              </TabPane>
             }
      
             
                <TabPane tab="Tab 3" key="3">
                  Tab 3
                </TabPane>
            
            </Tabs>
          </If>
        
         
        )
      }
}
