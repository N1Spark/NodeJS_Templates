import { Router } from "express";
const siteRouters = Router();
siteRouters.get("/", (req, res) => {
    res.render("home", {title: "Моё любимое дело — это катание на велосипеде. Люблю чувствовать ветер на лице, когда разгоняюсь по городским улицам.."})
});
siteRouters.get ("/reasons", (req, res) => {
    res.render("contacts", { reasons: ["Дарит мне свободу", "Позволяет отдохнуть от суеты", "Зарядиться энергией"] })
});
siteRouters.get ("/opinion", (req, res) => {
    res.render("opinion", {title: "Каждый маршрут — это новое приключение, будь то короткая прогулка или длительное путешествие. После каждой поездки я чувствую себя бодрым и готовым к новым свершениям."})
});
export default siteRouters