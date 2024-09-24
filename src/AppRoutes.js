import React from 'react';
import { Routes, Route , Navigate} from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Subscribe from './Components/Subscribtion';
import Support from './Components/Support';
import PlayGroup from './Components/PlayGroup';
import PlayGroupDownload from './Components/PlayGroupDownload';

import Modal from './Components/Modal';
import PP1Exams from './Components/PP1Exams';
import PP1ExamsDownload from './Components/PP1ExamsDownload';
import PP2Exams from './Components/PP2Exams';
import PP2ExamsDownloads from "./Components/PP2ExamsDownloads";
import SecondaryFullSetExaminations from './Components/SecondaryFullSetExaminations';
import SecondaryFullSetExaminationsDownloads from './Components/SecondaryFullSetExaminationsDownloads';
import SecondaryNotes from './Components/SecondaryNotes';
import SecondaryNotesDownload from './Components/SecondaryNotesDownload';
import KCSEpastPapers from './Components/KCSEpastPapers';
import SecondaryHolidayRevision from './Components/SecondaryHolidayRevision';
import KCSEtrialExaminations from './Components/KCSEtrialExaminations';
import PrimarySchemes from './Components/PrimarySchemes';
import SecondarySchemes from './Components/SecondarySchemes';
import SecondarySchemesDownloads from './Components/SecondarySchemesDownloads';
import KCSEtrialExaminationsDownload from './Components/KCSEtrialExaminationsDownload';
import KCSEpastPapersDownload from './Components/KCSEpastPapersDownload';
import SecondaryHolidayRevisionDownload from './Components/SecondaryHolidayRevisionDownload';
import PrimaryRevisionNotes from "./Components/PrimaryRevisionNotes";
import JSSAssessmentTools from "./Components/JSSAssessmentTools";
import JSSAssessmentToolsDownload from "./Components/JSSAssessmentToolsDownload";
import JSSNotesDownload from "./Components/JSSNotesDownload";
import JSSFullSetExaminations from "./Components/JSSFullSetExaminations";
import JSSCurriculumDesigns from "./Components/JSSCurriculumDesigns";
import JSSHolidayAssignments from "./Components/JSSHolidayAssignments";
import JSSHolidayAssignmentsDownload from "./Components/JSSHolidayAssignmentsDownload";
import PrimaryAssessmentTools from "./Components/PrimaryAssessmentTools";
import PrimaryAssessmentToolsDownload from "./Components/PrimaryAssessmentToolsDownload";
import Grade3Examinations from "./Components/Grade3Examinations";
import Grade6Examinations from "./Components/Grade6Examinations";
import Grade5Examinations from "./Components/Grade5Examinations";
import Grade4Examinations from "./Components/Grade4Examinations";
import Grade2Examinations from "./Components/Grade2Examinations";
import Grade1Examinations from "./Components/Grade1Examinations";
import PrimaryCurriculumDesign from "./Components/PrimaryCurriculumDesign";
import PrimaryCurriculumDesignDownload from "./Components/PrimaryCurriculumDesignDownload";
import PrimarySchemesDownloads from './Components/PrimarySchemesDownload';
import Grade1ExaminationsDownload from './Components/Grade1ExaminationsDownload';
import Grade2ExaminationsDownload from './Components/Grade2ExaminationsDownload';
import Grade3ExaminationsDownload from './Components/Grade3ExaminationsDownload';
import Grade4ExaminationsDownload from './Components/Grade4ExaminationsDownload';
import Grade5ExaminationsDownload from './Components/Grade5ExaminationsDownload';
import Grade6ExaminationsDownload from './Components/Grade6ExaminationsDownload';
import Grade7Examinations from './Components/Grade7Examinations';
import Grade7ExaminationsDownload from './Components/Grade7ExaminationsDownload';
import Grade8Examinations from './Components/Grade8Examinations';
import Grade8ExaminationsDownload from './Components/Grade8ExaminationsDownload';
import PrimaryRevisionNotesDownload from './Components/PrimaryRevisionNotesDownload';
import JSSSchemes from './Components/JSSSchemes';
import JSSRevisionNotes from './Components/JSSNotes';
import JSSSchemesDownload from './Components/JSSSchemesDownload';
import PrePrimaryCurriculumDesign from './Components/PrePrimaryCurriculumDesign';
import PrePrimaryCurriculumDesignDownload from './Components/PrePrimaryCurriculumDesignDownload';
import PrePrimarySchemes from './Components/PrePrimarySchemes';
import PrePrimarySchemesDownload from './Components/PrePrimarySchemesDownload';
import JSSFullSetExaminationsDownload from './Components/JSSFullSetExaminationsDownload';
import PrePrimaryHolidayAssignments from './Components/PrePrimaryHolidayAssignments';
import PrePrimaryHolidayAssignmentsDownload from './Components/PrePrimaryHolidayAssignmentsDownload';
import PrimaryHolidayAssignments from './Components/PrimaryHolidayAssignments';
import PrimaryHolidayAssignmentsDownload from './Components/PrimaryHolidayAssignmentsDownload';
import JSSCurriculumDesignsDownload from './Components/JSSCurriculumDesignsDownload';
import DeleteModal from './Components/DeleteModal';
import VerticalNav from './Components/VerticalNav';


import Header2 from './Components/Header2';
import Footer2 from './Components/Footer2';
import ResourceLinks from './Components/ResourceLinks';
import Careers from './Components/Careers';


const AppRoutes = ({isAdmin, isSubscribed, isLoggedIn, userId, clearToken, setIsLoggedIn, setUserId, setShowModal }) => (
   <>
    <Header2
     isSubscribed={isSubscribed} 
     isAdmin={isAdmin} 
     isLoggedIn={isLoggedIn} 
     userId={userId} 
     clearToken={clearToken} 
    />
   
   <Routes>
        
      
        {isAdmin &&(
            <Route 
            path='/support' 
            element={<Support isSubscribed={isSubscribed} isLoggedIn={isLoggedIn} userId={userId} clearToken={clearToken} />} 
        />
        )}
        

        <Route path='/vertical/nav' element={<VerticalNav isSubscribed={isSubscribed} isAdmin={isAdmin} isLoggedIn={isLoggedIn} userId={userId} clearToken={clearToken} />} />
        <Route path='/' element={<Home isSubscribed={isSubscribed} isLoggedIn={isLoggedIn} userId={userId} clearToken={clearToken} />} />
        <Route path='/school/resources' element={<ResourceLinks isSubscribed={isSubscribed} isLoggedIn={isLoggedIn} userId={userId} clearToken={clearToken} />} />
        <Route path='/careers' element={<Careers isSubscribed={isSubscribed} isLoggedIn={isLoggedIn} userId={userId} clearToken={clearToken} />} />      
       
        <Route path='/login' element={<Login isSubscribed={isSubscribed} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setUserId={setUserId} />} />
        <Route path='/signup' element={<Signup isSubscribed={isSubscribed} isLoggedIn={isLoggedIn} />} />     
        <Route path='/subscription' element={<Subscribe userId={userId} />} />       
        <Route 
        path="/play/group/exams" 
        element={<PlayGroup isAdmin={isAdmin} userId={userId} isLoggedIn={isLoggedIn} clearToken={clearToken} isSubscribed={isSubscribed} />}
        />
        <Route 
        path="/pre/primary/schemes" 
        element={<PrePrimarySchemes isAdmin={isAdmin} userId={userId} isLoggedIn={isLoggedIn} clearToken={clearToken} isSubscribed={isSubscribed} />}
        />
        <Route 
        path="/pre/primary/schemes/download" 
        element={<PrePrimarySchemesDownload isAdmin={isAdmin} userId={userId} isLoggedIn={isLoggedIn} clearToken={clearToken}isSubscribed={isSubscribed} />}
        />
       
        <Route 
        path="/pp1/exams" 
        element={<PP1Exams isAdmin={isAdmin} userId={userId} isLoggedIn={isLoggedIn} clearToken={clearToken} isSubscribed={isSubscribed}/>}
        />
        <Route 
        path="/pp2/exams" 
        element={<PP2Exams isAdmin={isAdmin} userId={userId} isLoggedIn={isLoggedIn} clearToken={clearToken} isSubscribed={isSubscribed}/>}
        />
         <Route 
        path="/pp1/exams/download" 
        element={<PP1ExamsDownload isAdmin={isAdmin} userId={userId} isLoggedIn={isLoggedIn} clearToken={clearToken} isSubscribed={isSubscribed}/>} 
        />        
        
        <Route 
        path="/pp2/exams/download" 
        element={<PP2ExamsDownloads isAdmin={isAdmin} userId={userId} isLoggedIn={isLoggedIn} clearToken={clearToken} isSubscribed={isSubscribed}/>}   />

        {/*JUNIOR SCHOOL/ JSS ROUTES*/}

        <Route 
        path="/jss/assessment/tools" 
        element={<JSSAssessmentTools isAdmin={isAdmin} userId={userId} isLoggedIn={isLoggedIn} clearToken={clearToken} isSubscribed={isSubscribed}/>}
        />
        <Route 
        path="/jss/assessment/tools/download" 
        element={<JSSAssessmentToolsDownload isAdmin={isAdmin} userId={userId} isLoggedIn={isLoggedIn} clearToken={clearToken} isSubscribed={isSubscribed}/>}
        />
        
        <Route 
        path="/jss/fullset/examinations" 
        element={<JSSFullSetExaminations isAdmin={isAdmin} userId={userId} isLoggedIn={isLoggedIn} clearToken={clearToken} isSubscribed={isSubscribed}/>}
        />
        <Route 
        path="/jss/fullset/examinations/download" 
        element={<JSSFullSetExaminationsDownload isAdmin={isAdmin} userId={userId} isLoggedIn={isLoggedIn} clearToken={clearToken} isSubscribed={isSubscribed}/>}
        />
        <Route 
        path="/jss/holiday/assignments" 
        element={<JSSHolidayAssignments isAdmin={isAdmin} userId={userId} isLoggedIn={isLoggedIn} clearToken={clearToken} isSubscribed={isSubscribed}/>}
        />
        <Route 
        path="/jss/holiday/assignments/download" 
        element={<JSSHolidayAssignmentsDownload isAdmin={isAdmin} userId={userId} isLoggedIn={isLoggedIn} clearToken={clearToken} isSubscribed={isSubscribed}/>}
        />
        <Route 
        path="/jss/notes" 
        element={<JSSRevisionNotes isAdmin={isAdmin} userId={userId} isLoggedIn={isLoggedIn} clearToken={clearToken} isSubscribed={isSubscribed}/>}
        />
        <Route 
        path="/jss/notes/download" 
        element={<JSSNotesDownload isAdmin={isAdmin} userId={userId} isLoggedIn={isLoggedIn} clearToken={clearToken} isSubscribed={isSubscribed}/>}
        />
        <Route 
        path="/jss/curriculum/designs" 
        element={<JSSCurriculumDesigns isAdmin={isAdmin} userId={userId} isLoggedIn={isLoggedIn} clearToken={clearToken} isSubscribed={isSubscribed}/>}
        />
        <Route 
        path="/jss/curriculum/designs/download" 
        element={<JSSCurriculumDesignsDownload isAdmin={isAdmin} userId={userId} isLoggedIn={isLoggedIn} clearToken={clearToken} isSubscribed={isSubscribed}/>}
        />
      
       <Route 
        path="/jss/schemes" 
        element={<JSSSchemes isAdmin={isAdmin} userId={userId} isLoggedIn={isLoggedIn} clearToken={clearToken} isSubscribed={isSubscribed}/>} 
        />
       <Route 
        path="/jss/schemes/downloads" 
        element={<JSSSchemesDownload isAdmin={isAdmin} userId={userId} isLoggedIn={isLoggedIn} clearToken={clearToken} isSubscribed={isSubscribed}/>} 
        />

         {/*PRIMARY*/}
        <Route 
        path="/pre/primary/curriculum/designs" 
        element={<PrePrimaryCurriculumDesign isAdmin={isAdmin} userId={userId} isLoggedIn={isLoggedIn} clearToken={clearToken} isSubscribed={isSubscribed}/>}
        />
        <Route 
        path="/pre/primary/curriculum/designs/downloads" 
        element={<PrePrimaryCurriculumDesignDownload isAdmin={isAdmin} userId={userId} isLoggedIn={isLoggedIn} clearToken={clearToken} isSubscribed={isSubscribed}/>}
        />
        <Route 
        path="/primary/curriculum/designs" 
        element={<PrimaryCurriculumDesign isAdmin={isAdmin} userId={userId} isLoggedIn={isLoggedIn} clearToken={clearToken} isSubscribed={isSubscribed}/>}
        />
        <Route 
        path="/primary/curriculum/designs/download" 
        element={<PrimaryCurriculumDesignDownload isAdmin={isAdmin} userId={userId} isLoggedIn={isLoggedIn} clearToken={clearToken} isSubscribed={isSubscribed}/>}
        />
        <Route 
        path="/primary/holiday/assignments" 
        element={<PrimaryHolidayAssignments isAdmin={isAdmin} userId={userId} isLoggedIn={isLoggedIn} clearToken={clearToken} isSubscribed={isSubscribed}/>}
        />
        <Route 
        path="/primary/holiday/assignments/downloads" 
        element={<PrimaryHolidayAssignmentsDownload isAdmin={isAdmin} userId={userId} isLoggedIn={isLoggedIn} clearToken={clearToken} isSubscribed={isSubscribed}/>}
        />

        <Route 
        path="/grade1/examinations" 
        element={<Grade1Examinations isAdmin={isAdmin} userId={userId} isLoggedIn={isLoggedIn} clearToken={clearToken} isSubscribed={isSubscribed}/>}
        />
        <Route 
        path="/grade1/examinations/downloads" 
        element={<Grade1ExaminationsDownload isAdmin={isAdmin} userId={userId} isLoggedIn={isLoggedIn} clearToken={clearToken} isSubscribed={isSubscribed}/>}
        />
        <Route 
        path="/grade2/examinations/downloads" 
        element={<Grade2ExaminationsDownload isAdmin={isAdmin} userId={userId} isLoggedIn={isLoggedIn} clearToken={clearToken} isSubscribed={isSubscribed}/>}
        />
        <Route 
        path="/grade3/examinations/downloads" 
        element={<Grade3ExaminationsDownload isAdmin={isAdmin} userId={userId} isLoggedIn={isLoggedIn} clearToken={clearToken} isSubscribed={isSubscribed}/>}
        />
        <Route 
        path="/grade4/examinations/downloads" 
        element={<Grade4ExaminationsDownload isAdmin={isAdmin} userId={userId} isLoggedIn={isLoggedIn} clearToken={clearToken} isSubscribed={isSubscribed}/>}
        />
        <Route 
        path="/grade5/examinations/downloads" 
        element={<Grade5ExaminationsDownload isAdmin={isAdmin} userId={userId} isLoggedIn={isLoggedIn} clearToken={clearToken} isSubscribed={isSubscribed}/>}
        />
        <Route 
        path="/grade6/examinations/downloads" 
        element={<Grade6ExaminationsDownload isAdmin={isAdmin} userId={userId} isLoggedIn={isLoggedIn} clearToken={clearToken} isSubscribed={isSubscribed}/>}
        />
        <Route 
        path="/grade2/examinations" 
        element={<Grade2Examinations isAdmin={isAdmin} userId={userId} isLoggedIn={isLoggedIn} clearToken={clearToken} isSubscribed={isSubscribed}/>}
        />
        <Route 
        path="/grade3/examinations" 
        element={<Grade3Examinations isAdmin={isAdmin} userId={userId} isLoggedIn={isLoggedIn} clearToken={clearToken} isSubscribed={isSubscribed}/>}
        />
        <Route 
        path="/grade4/examinations" 
        element={<Grade4Examinations isAdmin={isAdmin} userId={userId} isLoggedIn={isLoggedIn} clearToken={clearToken} isSubscribed={isSubscribed}/>}
        />
        <Route 
        path="/grade5/examinations" 
        element={<Grade5Examinations isAdmin={isAdmin} userId={userId} isLoggedIn={isLoggedIn} clearToken={clearToken} isSubscribed={isSubscribed}/>}
        />
        <Route 
        path="/grade6/examinations" 
        element={<Grade6Examinations isAdmin={isAdmin} userId={userId} isLoggedIn={isLoggedIn} clearToken={clearToken} isSubscribed={isSubscribed}/>}
        />
        <Route 
        path="/primary/schemes" 
        element={<PrimarySchemes isAdmin={isAdmin} userId={userId} isLoggedIn={isLoggedIn} clearToken={clearToken} isSubscribed={isSubscribed}/>}
        />
        <Route 
        path="/primary/schemes/downloads" 
        element={<PrimarySchemesDownloads isAdmin={isAdmin} userId={userId} isLoggedIn={isLoggedIn} clearToken={clearToken} isSubscribed={isSubscribed}/>}
        />
        <Route 
        path="/primary/assessment/tools" 
        element={<PrimaryAssessmentTools isAdmin={isAdmin} userId={userId} isLoggedIn={isLoggedIn} clearToken={clearToken} isSubscribed={isSubscribed}/>}
        />
        <Route 
        path="/primary/assessment/tools/download" 
        element={<PrimaryAssessmentToolsDownload isAdmin={isAdmin} userId={userId} isLoggedIn={isLoggedIn} clearToken={clearToken} isSubscribed={isSubscribed}/>}
        />
        <Route 
        path="/primary/revision/notes" 
        element={<PrimaryRevisionNotes isAdmin={isAdmin} userId={userId} isLoggedIn={isLoggedIn} clearToken={clearToken} isSubscribed={isSubscribed}/>}
        />
        <Route 
        path="/primary/revision/notes/downloads" 
        element={<PrimaryRevisionNotesDownload isAdmin={isAdmin} userId={userId} isLoggedIn={isLoggedIn} clearToken={clearToken} isSubscribed={isSubscribed}/>}
        />

        {/*SECONDARY*/}
        <Route         
        path="/secondary/notes" 
        element={<SecondaryNotes isAdmin={isAdmin} userId={userId} isLoggedIn={isLoggedIn} clearToken={clearToken} isSubscribed={isSubscribed}/>}
        />
        <Route         
        path="/secondary/notes/downloads" 
        element={<SecondaryNotesDownload isAdmin={isAdmin} userId={userId} isLoggedIn={isLoggedIn} clearToken={clearToken} isSubscribed={isSubscribed}/>}
        />
        <Route 
        path="/secondary/schemes" 
        element={<SecondarySchemes isAdmin={isAdmin} userId={userId} isLoggedIn={isLoggedIn} clearToken={clearToken} isSubscribed={isSubscribed}/>}
        />
        <Route 
        path="/secondary/schemes/downloads" 
        element={<SecondarySchemesDownloads isAdmin={isAdmin} userId={userId} isLoggedIn={isLoggedIn} clearToken={clearToken} isSubscribed={isSubscribed}/>}
        />
        <Route 
        path="/grade8/examinations" 
        element={<Grade8Examinations isAdmin={isAdmin} userId={userId} isLoggedIn={isLoggedIn} clearToken={clearToken} isSubscribed={isSubscribed}/>}
        />
        <Route 
        path="/grade8/examinations/download" 
        element={<Grade8ExaminationsDownload isAdmin={isAdmin} userId={userId} isLoggedIn={isLoggedIn} clearToken={clearToken} isSubscribed={isSubscribed}/>}
        />
        <Route 
        path="/grade7/examinations" 
        element={<Grade7Examinations isAdmin={isAdmin} userId={userId} isLoggedIn={isLoggedIn} clearToken={clearToken} isSubscribed={isSubscribed}/>}
        />
        <Route 
        path="/grade7/examinations/download" 
        element={<Grade7ExaminationsDownload isAdmin={isAdmin} userId={userId} isLoggedIn={isLoggedIn} clearToken={clearToken} isSubscribed={isSubscribed}/>}
        />
        <Route 
        path="/secondary/holiday/revision" 
        element={<SecondaryHolidayRevision isAdmin={isAdmin} userId={userId} isLoggedIn={isLoggedIn} clearToken={clearToken} isSubscribed={isSubscribed}/>}
        />
        <Route 
        path="/secondary/holiday/revision/downloads" 
        element={<SecondaryHolidayRevisionDownload isAdmin={isAdmin} userId={userId} isLoggedIn={isLoggedIn} clearToken={clearToken} isSubscribed={isSubscribed}/>}
        />
        <Route 
        path="/kcse/past/papers" 
        element={<KCSEpastPapers isAdmin={isAdmin} userId={userId} isLoggedIn={isLoggedIn} clearToken={clearToken} isSubscribed={isSubscribed}/>}
        />
        <Route 
        path="/kcse/past/papers/downloads" 
        element={<KCSEpastPapersDownload isAdmin={isAdmin} userId={userId} isLoggedIn={isLoggedIn} clearToken={clearToken} isSubscribed={isSubscribed}/>}
        />
        <Route 
        path="/kcse/trial/examinations" 
        element={<KCSEtrialExaminations isAdmin={isAdmin} userId={userId} isLoggedIn={isLoggedIn} clearToken={clearToken} isSubscribed={isSubscribed}/>}
        />
        <Route 
        path="/kcse/trial/examinations/downloads" 
        element={<KCSEtrialExaminationsDownload isAdmin={isAdmin} userId={userId} isLoggedIn={isLoggedIn} clearToken={clearToken} isSubscribed={isSubscribed}/>}
        />
        <Route 
        path="/secondary/fullset/examinations" 
        element={<SecondaryFullSetExaminations isAdmin={isAdmin} userId={userId} isLoggedIn={isLoggedIn} clearToken={clearToken} isSubscribed={isSubscribed}/>}
        />
        <Route 
        path="/secondary/fullset/examinations/download" 
        element={<SecondaryFullSetExaminationsDownloads isAdmin={isAdmin} userId={userId} isLoggedIn={isLoggedIn} clearToken={clearToken} isSubscribed={isSubscribed}/>}
        />

       
        
        <Route 
        path="/pre/primary/holiday/assignments" 
        element={<PrePrimaryHolidayAssignments isAdmin={isAdmin} userId={userId} isLoggedIn={isLoggedIn} clearToken={clearToken} isSubscribed={isSubscribed}/>} />
        <Route 
        path="/pre/primary/holiday/assignments/download" 
        element={<PrePrimaryHolidayAssignmentsDownload isAdmin={isAdmin} userId={userId} isLoggedIn={isLoggedIn} clearToken={clearToken} isSubscribed={isSubscribed}/>} />

        <Route 
        path="/play/group/exams/download" 
        element={<PlayGroupDownload isAdmin={isAdmin} userId={userId} isLoggedIn={isLoggedIn} clearToken={clearToken} isSubscribed={isSubscribed}/>} 
        />         
        <Route path='*' element={<div>404 Not Found</div>} /> {/* Optional: Add a 404 page */}
    </Routes>
    <Footer2
     isSubscribed={isSubscribed} 
     isLoggedIn={isLoggedIn} 
     userId={userId} 
     clearToken={clearToken} 
    />
    <Modal
     isSubscribed={isSubscribed} 
     isLoggedIn={isLoggedIn} 
     userId={userId} 
     clearToken={clearToken} 
    />
    <DeleteModal
     isSubscribed={isSubscribed} 
     isLoggedIn={isLoggedIn} 
     userId={userId} 
     clearToken={clearToken} 
    />
    </>
);

export default AppRoutes;
