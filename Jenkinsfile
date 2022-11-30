pipeline {
    agent any
    tools {nodejs "17.7.0"}
    stages {
        stage("Build") {
            steps {
                sh "npm install"
                sh "npm run build"
            }
        }
    }
}