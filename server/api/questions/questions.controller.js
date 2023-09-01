import { connection } from "../../config/db.js";
import questionService from "./questions.service.js";

const questionController = {
    createQuestion: (req, res) => {
       
        //id is user id
        const { question, catagory,questionDescription, user_id } = req.body;
        

        
        if (!question || !user_id) {
            return res.status(400).json({ msg: 'Not all fields have been provided!' })
        }
        
        questionService.addNewQuestion(req.body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ msg: "database connection err" })
            }
            return res.status(200).json({
                msg: "New question was created successfully",
                data: results
            })
        })
    },

    getQuestions: (req, res) => {
        questionService.getAllQuestions((err, results) => {
            if (err) {
                console.log(err);
                return res.status(501).json({ msg: "database connection error" })
            }
            return res.status(200).json({ data: results });
        })
    },

    getQuestionById: (req, res) => {
        //id is postId
        let id = req.params.id[1];
        questionService.questionById(id, (err, results) => {
            if (err) {
                console.log(err);
                return res
                    .status(500)
                    .json({ msg: "database connection error" })
            }
            if (!results) {
                return res.status(400).json({ msg: "Record not found" });
            }
            return res.status(200).json({ data: results });
        })
    }



}
export default questionController
