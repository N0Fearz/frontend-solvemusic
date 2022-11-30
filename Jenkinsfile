pipeline {
   agent { dockerfile true }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
        stage('Test') {
            steps {
                sh 'node --version'
            }
        }
    }
}