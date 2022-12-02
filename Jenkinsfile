pipeline {
    agent any
    tools {nodejs "14.7.0"}
    stages {
        stage("Build") {
            steps {
                // there a few default environment variables on Jenkins
                // on local Jenkins machine (assuming port 8080) see
                // http://localhost:8080/pipeline-syntax/globals#env
                sh 'npm ci'
                sh 'npm run cy:verify'
            }
        }
        stage('start local server') {
             steps {
                // start local server in the background
                // we will shut it down in "post" command block
                // sh 'nohup npm run start &'
                sh 'npm run start & npx wait-on http://localhost:3000'
              }
            }
        stage('Test Start') {
            steps {
                script {
                    wrap([$class: 'Xvfb']) {
                        stage('Test 1') {
                            sh "npm run cy:run"
                        }
                    }
                }
            }
        }
    }
    post {
    // shutdown the server running in the background
    always {
      echo 'Stopping local server'
      sh 'kill -f http-server'
    }
  }
}
