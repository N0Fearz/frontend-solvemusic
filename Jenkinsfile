pipeline {
    agent any
    tools {nodejs "14.7.0"}
    stages {
        stage("Build") {
            wrap([$class: 'Xvfb']) {
                steps {
                    sh "npm install"
                    sh "npm run build"
                }
            }
        }
        stage('Test 1') {
            steps {
                sh "npm run cy:run"
            }
        }
    }
}