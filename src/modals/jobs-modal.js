export default class JobsModal {
  constructor(
    id,
    type,
    position,
    location,
    company,
    CTC,
    Job_posted,
    skills,
    numberOfOpenings
  ) {
    this.id = id;
    this.type = type;
    this.position = position;
    this.location = location;
    this.company = company;
    this.CTC = CTC;
    this.Job_posted = Job_posted;
    this.skills = skills;
    this.numberOfOpenings = numberOfOpenings;
  }
  static get() {
    return jobStructureArray;
  }
}

let jobStructureArray = [
  new JobsModal(
    1,
    "Remote",
    "Backend Developer",
    "New Delhi",
    "Coding Ninjas",
    "16-18 LPA",
    "2023-11-23",
    "HTML, CSS, Javascript, Bootstrap",
    19
  ),

  new JobsModal(
    2,
    "Hybrid",
    "Frontend Developer",
    "New York, USA",
    "Google",
    "16-18 LPA",
    "2023-11-23",
    "HTML, CSS, Javascript, Bootstrap",
    19
  ),

  new JobsModal(
    3,
    "On-Site",
    "Full-Stack Developer",
    "Tokyo, Japan",
    "Microsoft",
    "16-18 LPA",
    "2023-11-23",
    "HTML, CSS, Javascript, Bootstrap",
    19
  ),
];
