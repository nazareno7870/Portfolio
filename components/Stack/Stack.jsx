import styles from '../../styles/Home.module.css'
import Image from 'next/image'
import htmlIcon from '../../public/assets/Stack/html5.svg'
import cssIcon from '../../public/assets/Stack/css3.svg'
import sassIcon from '../../public/assets/Stack/sass.svg'
import jsIcon from '../../public/assets/Stack/javascript.svg'
import reactIcon from '../../public/assets/Stack/react.svg'
import reduxIcon from '../../public/assets/Stack/redux.svg'
import nextIcon from '../../public/assets/Stack/next-js.svg'
import boostrapIcon from '../../public/assets/Stack/bootstrap.svg'
import nodeIcon from '../../public/assets/Stack/nodejs.svg'
import expressIcon from '../../public/assets/Stack/express.svg'
import jwtIcon from '../../public/assets/Stack/jwt.svg'
import mongoIcon from '../../public/assets/Stack/mongodb.svg'
import mySqlIcon from '../../public/assets/Stack/mysql.svg'
import postregsIcon from '../../public/assets/Stack/postgres.svg'
import gitIcon from '../../public/assets/Tools/git.svg'
import githubIcon from '../../public/assets/Tools/github.svg'
import npmIcon from '../../public/assets/Tools/npm.svg'
import herokuIcon from '../../public/assets/Tools/heroku.svg'
import insomniaIcon from '../../public/assets/Tools/insomina.svg'
import netlify from '../../public/assets/Tools/netlify.svg'
import vercelIcon from '../../public/assets/Tools/vercel.svg'
import jiraIcon from '../../public/assets/Tools/jira.svg'
import vsIcon from '../../public/assets/Tools/visual-studio-code-1.svg'
import figmaIcon from '../../public/assets/Tools/figma.svg'

const Stack = () => {
    return (
        <section className={styles.stack}>
            <div className={styles.title} id="stack">
                <h2>Stack 📚</h2>
            </div>
            <div className={styles.stackType}>
                <div className={styles.type}>
                    <h2>Front End</h2>
                </div>
                <div className={styles.stackContainer}>
                    <div className={styles.stackItem}>
                        <Image
                            src={htmlIcon}
                            alt="HtmlIcon"
                            className={styles.socialIcon}
                            width={60}
                            height={60}
                        />
                        <h5>HTML</h5>
                    </div>
                    <div className={styles.stackItem}>
                        <Image
                            src={cssIcon}
                            alt="HtmlIcon"
                            className={styles.socialIcon}
                            width={60}
                            height={60}
                        />
                        <h5>CSS</h5>
                    </div>
                    <div className={styles.stackItem}>
                        <Image
                            src={sassIcon}
                            alt="HtmlIcon"
                            className={styles.socialIcon}
                            width={60}
                            height={60}
                        />
                        <h5>SASS</h5>
                    </div>
                    <div className={styles.stackItem}>
                        <Image
                            src={boostrapIcon}
                            alt="HtmlIcon"
                            className={styles.socialIcon}
                            width={60}
                            height={60}
                        />
                        <h5>BOOSTRAP</h5>
                    </div>
                    <div className={styles.stackItem}>
                        <Image
                            src={jsIcon}
                            alt="HtmlIcon"
                            className={styles.socialIcon}
                            width={60}
                            height={60}
                        />
                        <h5>JS</h5>
                    </div>
                    <div className={styles.stackItem}>
                        <Image
                            src={reactIcon}
                            alt="HtmlIcon"
                            className={styles.socialIcon}
                            width={60}
                            height={60}
                        />
                        <h5>REACT</h5>
                    </div>
                    <div className={styles.stackItem}>
                        <Image
                            src={reduxIcon}
                            alt="HtmlIcon"
                            className={styles.socialIcon}
                            width={60}
                            height={60}
                        />
                        <h5>REDUX</h5>
                    </div>
                    <div className={styles.stackItem}>
                        <Image
                            src={nextIcon}
                            alt="HtmlIcon"
                            className={styles.socialIcon}
                            width={60}
                            height={60}
                        />
                        <h5>NEXT JS</h5>
                    </div>

                </div>
            </div>
            <div className={styles.stackType}>
                <div className={styles.type}>
                    <h2>Back End</h2>
                </div>
                <div className={styles.stackContainer}>
                    <div className={styles.stackItem}>
                        <Image
                            src={nodeIcon}
                            alt="HtmlIcon"
                            className={styles.socialIcon}
                            width={60}
                            height={60}
                        />
                        <h5>NODE JS</h5>
                    </div>
                    <div className={styles.stackItem}>
                        <Image
                            src={expressIcon}
                            alt="HtmlIcon"
                            className={styles.socialIcon}
                            width={60}
                            height={60}
                        />
                        <h5>EXPRESS</h5>
                    </div>
                    <div className={styles.stackItem}>
                        <Image
                            src={jwtIcon}
                            alt="HtmlIcon"
                            className={styles.socialIcon}
                            width={60}
                            height={60}
                        />
                        <h5>JWT</h5>
                    </div>
                    <div className={styles.stackItem}>
                        <Image
                            src={mongoIcon}
                            alt="HtmlIcon"
                            className={styles.socialIcon}
                            width={60}
                            height={60}
                        />
                        <h5>MONGO DB</h5>
                    </div>
                    <div className={styles.stackItem}>
                        <Image
                            src={mySqlIcon}
                            alt="HtmlIcon"
                            className={styles.socialIcon}
                            width={60}
                            height={60}
                        />
                        <h5>MY SQL</h5>
                    </div>
                    <div className={styles.stackItem}>
                        <Image
                            src={postregsIcon}
                            alt="HtmlIcon"
                            className={styles.socialIcon}
                            width={60}
                            height={60}
                        />
                        <h5>POSTGRES</h5>
                    </div>
                </div>
            </div>
            <div className={styles.stackType}>
                <div className={styles.type}>
                    <h2>Tools</h2>
                </div>
                <div className={styles.stackContainer}>
                    <div className={styles.stackItem}>
                        <Image
                            src={gitIcon}
                            alt="HtmlIcon"
                            className={styles.socialIcon}
                            width={60}
                            height={60}
                        />
                        <h5>GIT</h5>
                    </div>
                    <div className={styles.stackItem}>
                        <Image
                            src={githubIcon}
                            alt="HtmlIcon"
                            className={styles.socialIcon}
                            width={60}
                            height={60}
                        />
                        <h5>GITHUB</h5>
                    </div>
                    <div className={styles.stackItem}>
                        <Image
                            src={npmIcon}
                            alt="HtmlIcon"
                            className={styles.socialIcon}
                            width={60}
                            height={60}
                        />
                        <h5>NPM</h5>
                    </div>
                    <div className={styles.stackItem}>
                        <Image
                            src={herokuIcon}
                            alt="HtmlIcon"
                            className={styles.socialIcon}
                            width={60}
                            height={60}
                        />
                        <h5>HEROKU</h5>
                    </div>

                    <div className={styles.stackItem}>
                        <Image
                            src={netlify}
                            alt="HtmlIcon"
                            className={styles.socialIcon}
                            width={60}
                            height={60}
                        />
                        <h5>NETLIFY</h5>
                    </div>
                    <div className={styles.stackItem}>
                        <Image
                            src={vercelIcon}
                            alt="HtmlIcon"
                            className={styles.socialIcon}
                            width={60}
                            height={60}
                        />
                        <h5>VERCEL</h5>
                    </div>
                    <div className={styles.stackItem}>
                        <Image
                            src={jiraIcon}
                            alt="HtmlIcon"
                            className={styles.socialIcon}
                            width={60}
                            height={60}
                        />
                        <h5>JIRA</h5>
                    </div>
                    <div className={styles.stackItem}>
                        <Image
                            src={vsIcon}
                            alt="HtmlIcon"
                            className={styles.socialIcon}
                            width={60}
                            height={60}
                        />
                        <h5>VS CODE</h5>
                    </div>
                    <div className={styles.stackItem}>
                        <Image
                            src={figmaIcon}
                            alt="HtmlIcon"
                            className={styles.socialIcon}
                            width={60}
                            height={60}
                        />
                        <h5>FIGMA</h5>
                    </div>
                    <div className={styles.stackItem}>
                        <Image
                            src={insomniaIcon}
                            alt="HtmlIcon"
                            className={styles.socialIcon}
                            width={60}
                            height={60}
                        />
                        <h5>INSOMNIA</h5>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Stack; 