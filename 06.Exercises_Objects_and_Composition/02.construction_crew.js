function constructionCrew(worker) {
   if (worker.dizziness) {
    worker.levelOfHydrated += worker.experience * worker.weight * 0.1
    worker.dizziness = false
   }
   return worker

}

constructionCrew({
  weight: 80,
  experience: 1,
  levelOfHydrated: 0,
  dizziness: true,
}); //{ weight: 80, experience: 1, levelOfHydrated: 8, dizziness: false }

// constructionCrew({
//   weight: 120,
//   experience: 20,
//   levelOfHydrated: 200,
//   dizziness: true,
// }); // { weight: 120, experience: 20, levelOfHydrated: 440, dizziness: false }

// constructionCrew({
//   weight: 95,
//   experience: 3,
//   levelOfHydrated: 0,
//   dizziness: false,
// }); //{ weight: 95, experience: 3, levelOfHydrated: 0, dizziness: false }
