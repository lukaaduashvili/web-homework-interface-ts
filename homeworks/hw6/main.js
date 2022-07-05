import {generateTests} from './tests'
import {DigitalHomeworkProcess} from "../../src/DigitalHomeworkProcess";

const hw = new DigitalHomeworkProcess();

generateTests(hw)
hw.runTests()

