import JobsModal from "../modals/jobs-modal.js";
export default class Portal {
  landingpage(req, res) {
    res.render("homepage");
  }
  getjoblist(req, res) {
    let jobs = JobsModal.get();
    res.render("job-list", { job: jobs, errorMessage: null });
  }
}
