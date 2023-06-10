import React from 'react'
import ViewTimelineIcon from '@mui/icons-material/ViewTimeline';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
const Teacherdashheader = () => {
  return (
    <div>
       <div class="container-fluid">
    <div className='row tophead'>
      <div class="dropdown col-md-2 block">
  <button type="button" class="btn  rounded-0 text-white" data-bs-toggle="dropdown">
    My Courses<KeyboardArrowDownIcon/>
  </button>
  <ul class="dropdown-menu ">
    <li><a class="dropdown-item" href="#"><AutoStoriesIcon sx={{fontSize:'18px'}}/> SE</a>
    <ul class="dropdown-menu dropdown-submenu">
            <li>
              <a class="dropdown-item" href="#"><ViewTimelineIcon sx={{fontSize:'18px'}}/> Quiz</a>
            </li>
            <li>
              <a class="dropdown-item" href="#"><ViewTimelineIcon sx={{fontSize:'18px'}}/>  Assignment</a>
            </li>
            <li>
              <a class="dropdown-item" href="#"><ViewTimelineIcon sx={{fontSize:'18px'}}/>  Exam</a>
            </li>
          </ul>
    </li>
    <li><a class="dropdown-item" href="#"><AutoStoriesIcon sx={{fontSize:'18px'}}/> SREE</a>
    <ul class="dropdown-menu dropdown-submenu">
            <li>
              <a class="dropdown-item" href="#"><ViewTimelineIcon sx={{fontSize:'18px'}}/> Quiz</a>
            </li>
            <li>
              <a class="dropdown-item" href="#"><ViewTimelineIcon sx={{fontSize:'18px'}}/> Assignment</a>
            </li>
            <li>
              <a class="dropdown-item" href="#"><ViewTimelineIcon sx={{fontSize:'18px'}}/> Exam</a>
            </li>
          </ul>
    </li>
    <li><a class="dropdown-item" href="#"><AutoStoriesIcon sx={{fontSize:'18px'}}/> SRE</a>
    <ul class="dropdown-menu dropdown-submenu">
            <li>
              <a class="dropdown-item" href="#"><ViewTimelineIcon sx={{fontSize:'18px'}}/> Quiz</a>
            </li>
            <li>
              <a class="dropdown-item" href="#"><ViewTimelineIcon sx={{fontSize:'18px'}}/> Assignment</a>
            </li>
            <li>
              <a class="dropdown-item" href="#"><ViewTimelineIcon sx={{fontSize:'18px'}}/> Exam</a>
            </li>
          </ul>
    </li>
  </ul>
</div>
      <div class="dropdown col-md-2 block">
  <button type="button" class="btn rounded-0 text-white" data-bs-toggle="dropdown">
    Batch Advisory<KeyboardArrowDownIcon/>
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Link 1</a></li>
    <li><a class="dropdown-item" href="#">Link 2</a></li>
    <li><a class="dropdown-item" href="#">Link 3</a></li>
  </ul>
      </div>
      <div class="dropdown col-md-2 block">
  <button type="button" class="btn rounded-0 text-white mt-1" >
    Curriculum
  </button>
  {/* <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Link 1</a></li>
    <li><a class="dropdown-item" href="#">Link 2</a></li>
    <li><a class="dropdown-item" href="#">Link 3</a></li>
  </ul> */}
</div>
      <div class="dropdown col-md-2 block">
  <button type="button" class="btn rounded-0 text-white" data-bs-toggle="dropdown">
    OBE Description <KeyboardArrowDownIcon/>
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Link 1</a></li>
    <li><a class="dropdown-item" href="#">Link 2</a></li>
    <li><a class="dropdown-item" href="#">Link 3</a></li>
  </ul>
</div>
      <div class="dropdown col-md-2 block">
  <button type="button" class="btn rounded-0 text-white" data-bs-toggle="dropdown">
    Attendance<KeyboardArrowDownIcon/>
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Link 1</a></li>
    <li><a class="dropdown-item" href="#">Link 2</a></li>
    <li><a class="dropdown-item" href="#">Link 3</a></li>
  </ul>
</div>
      <div class="dropdown col-md-2 block">
  <button type="button" class="btn rounded-0 text-white" data-bs-toggle="dropdown">
     Course Specification<KeyboardArrowDownIcon/>
  </button>
  <ul class="dropdown-menu dropdown-menu-center">
    <li><a class="dropdown-item" href="#">Link 1</a></li>
    <li><a class="dropdown-item" href="#">Link 2</a></li>
    <li><a class="dropdown-item" href="#">Link 3 </a></li>
  </ul>
</div>
</div>
</div>
    </div>
  )
}

export default Teacherdashheader;
