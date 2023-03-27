import React from 'react'
// @import url(https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css);
import GitHubIcon from '@mui/icons-material/GitHub';
import PreviewIcon from '@mui/icons-material/Preview';
const Projects = ({projectVid,title,description,linktogit,linktoweb}) => {
  return (
    <>
    <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
        <div className="md:flex items-center -mx-10">
            <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                <div className="relative">
                 
                    <div className="border-4 border-cyan-500">
                      <img className="w-full" alt="project" src={projectVid}/> </div>
                </div>
            </div>
            <div className="w-full md:w-1/2 px-10">
                <div className="mb-10">
                    <h1 className="font-bold uppercase text-2xl mb-5 second-head">{title}</h1>
                    <p className="text-sm">{description}
                     </p>
                </div>
                <div>
                    <div className="inline-block align-bottom mr-5 ">
                    <a target="_blank" rel="noreferrer" href={linktogit} className="bg-black opacity-75 hover:opacity-100 text-white
                         hover:text-white rounded-full px-10 py-2 font-semibold btn"><i className="mdi mdi-cart -ml-2 mr-2"></i><GitHubIcon/> Git repository</a>
                    </div>
                    <div className="inline-block align-bottom md:mt-10">
                        <a target="_blank" rel="noreferrer" href={linktoweb} className="bg-cyan-300 opacity-75 hover:opacity-100 text-white
                        rounded-full px-10 py-2 font-semibold btn btn-primary" ><i className="mdi mdi-cart -ml-2 mr-2"></i><PreviewIcon/> Preview</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</>
  )
}

export default Projects