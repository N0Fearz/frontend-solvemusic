pipeline {
    agent any
    tools {nodejs "14.7.0"}
    stages {
        stage("Build") {
            steps {
                sh "npm install"
                sh "npm run build"
            }
        }
        stage('Test Start') {
            steps {
                script {
                    wrap([$class: 'Xvfb', screen: '1920x1080x24']) {
                        stage('Test 1') {
                            steps {
                                sh "npm run cy:run"
                            }
                        }
                        stage('Test Suite 2') {
                            echo 'Use Xvfb here'
                        }
                    }
                }
            }
        }
    }
}