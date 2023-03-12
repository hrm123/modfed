import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';
var fs = require('fs');
var path = require('path');
const _ = require("lodash");
import { v4 as uuidv4 } from 'uuid';

//@ts-ignore
import ResumeParser from 'easy-resume-parser';

const parseResume = async (req: Request, res: Response, next: NextFunction) => {
    // get the post id from the req
    let name: string = req.params.name;

    console.log(`name: ${name}`)
    
    // parse resume
    const fileFullName = path.join(__dirname, '..', 'files', `${name}.docx`);
    const resume = new ResumeParser(fileFullName); // `/files/${name}.docx`);
    
    resume.parseToJSON()
    .then((resumeXml:string) => {
        console.log('resumeXml ', resumeXml);
        return res.status(200).json({
            xml: resumeXml
        });
  })
  .catch((error: any) => {
    console.error(error);
    return res.status(500).json({
        xml: error
    });
  });
  

    
};


const saveResume = async (req: Request, res: Response, next: NextFunction) => {
  // get the post id from the req
  let name: string = req.params.name;

  console.log(`name: ${name}`)
  
  // parse resume
  const fileFullName = path.join(__dirname, '..', 'files', `${name}.docx`);
  const resume = new ResumeParser(fileFullName); // `/files/${name}.docx`);
  
  resume.parseToFile(path.join(__dirname,'..','files',`converted`)) //output subdirectory
  .then((file:any) => {
    console.log('Yay! ', file);
    return res.status(200).json({
      status: "saved file as xml"
  });
  })
  .catch((error: any)  => {
    console.error(error);
    return res.status(500).json({
      status: error
  });
  });

};

export default { parseResume, saveResume };