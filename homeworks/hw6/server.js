import {generateTests} from './tests'
import {createServerConfig, generateServerTests, getScore} from './extras'
import {DigitalHomeworkProcess} from "../../dist/index_solution.64597ba8";
import {setUpServer} from "../../src/SetUpServer";


let hw = new DigitalHomeworkProcess()

hw.config = createServerConfig(hw.config)
const { launch } = setUpServer()
generateTests(hw.config)
generateServerTests(hw.config)
launch(getScore)
