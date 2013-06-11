function MGAccuracyFeature(user) {
  correct = user.get('correct');
  questions = user.get('questions');

  if(questions == 0)
    return 1.0;
  else
    return correct / questions;
}
