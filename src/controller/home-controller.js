import JobsModal from "../modals/jobs-modal.js";
export default class Portal {
  landingpage(req, res) {
    res.render("homepage");
  }
  getjoblist(req, res) {
    let jobs = JobsModal.get();
    res.render("job-list", { job: jobs, errorMessage: null });
  }
  viewmore(req, res) {
    const jobId = req.params.id;
    const jobObj = JobsModal.getJobbyId(jobId);
    console.log(jobObj);
    const numberOfApplicants = JobsModal.get().length;
    console.log(numberOfApplicants);
    return res.render("more-details", {
      jobObj,
      numberOfApplicants,
    });
  }
  postCreateJob(req,res){
    
  }
}
