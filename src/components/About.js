import React from 'react';

function About() {
    
  return (
    <div className='container my-3' style={{maxWidth: '700px'}}>
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Introduction
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                  <b>iNotebook</b> is a user-friendly and versatile web application built with the powerful combination of React and Bootstrap. This dynamic app is designed to streamline your note-taking experience by allowing you to create an account, store notes securely in the cloud, and conveniently edit or delete them.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Key Features
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <b>User-Friendly Account Creation:</b> iNotebook provides a hassle-free account creation process, ensuring that anyone can quickly sign up and get started. Your account will be your gateway to a seamless note-taking experience. <br />
                <b>Cloud-Based Storage:</b> Gone are the days of worrying about losing your notes. iNotebook stores your notes securely in the cloud, making them accessible from anywhere with an internet connection. No more need for backups; your notes are always just a click away. <br />
                <b>Effortless Note Creation:</b> With its intuitive user interface, iNotebook allows you to create new notes in a snap. Simply type in your thoughts, ideas, to-do lists, or anything you need to remember, and the app will handle the rest. <br />
                <b>Editing Made Easy: </b>Whether you want to refine your ideas or make corrections, iNotebook offers a simple and efficient editing process. Update your notes with ease to keep them up-to-date. <br />
                <b>Streamlined Deletion:</b> Need to declutter your notebook? Deleting notes in iNotebook is straightforward. Remove any note you no longer need, and free up space for fresh ideas. <br />
                <b>Responsive Design: </b>iNotebook is built with Bootstrap, ensuring a responsive and visually appealing design that adapts seamlessly to various devices and screen sizes. <br />
                <b>Secure and Private:</b> Your data's security and privacy are of utmost importance. iNotebook implements robust security measures to protect your notes and personal information. <br />
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Summary
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                  <b>iNotebook</b> is the ultimate note-taking solution for anyone who wants the convenience of digital note storage with the freedom to access and manage their notes from anywhere. Say goodbye to the limitations of physical notebooks and welcome the future of note-taking with iNotebook. Try it today and unlock the potential of a more organized, efficient, and secure note-taking experience.
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About