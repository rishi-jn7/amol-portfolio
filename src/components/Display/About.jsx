import { experience } from '../../data/data.js'
import "./About.css";

export default function About() {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <div className="d-flex gap-5">
        <img className="profile-img" src="src/assets/amol.jpg" alt="amol jain" />
        <div>
          <div className='about'>
            I’m Amol Jain, currently working as a graphic designer, 3D modeler & video editor
            at Graphics Beyond LLP, an Experiential Design Studio. I’ve completed my Bachelor’s
            in Graphic Design from Symbiosis Institute of Design, Pune. I’ve done my internship
            at Industrial Design Center, IIT Bombay. My skills include Blender, Figma, GameMaker, Godot & most apps from Adobe Creative Cloud.
          </div>
          <div className='d-flex gap-2 align-items-center justify-content-end mt-2 fs-5 pe-4'>
            <i class="bi bi-linkedin"></i>
            <i class="bi bi-linkedin"></i>
          </div>
        </div>
      </div>

      <div className='mt-5 experience-table'>
        <h4>Experience</h4>
        <div className="table-responsive mt-4">
          <table className="table align-middle">
            <tbody>
              {experience.map((exp, index) => (
                <tr key={index}>
                  <td>
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      width="50"
                      height="50"
                      className="rounded"
                    />
                  </td>
                  <td>{exp.company}</td>
                  <td>{exp.role}</td>
                  <td>{exp.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
