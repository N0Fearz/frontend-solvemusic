pipeline {
    agent any
    tools {nodejs "14.7.0"}
    stages {
        stage("Build") {
            steps {
                // there a few default environment variables on Jenkins
                // on local Jenkins machine (assuming port 8080) see
                // http://localhost:8080/pipeline-syntax/globals#env
                echo "Running build ${env.BUILD_ID} on ${env.JENKINS_URL}"
                sh 'npm ci'
                sh 'npm run cy:verify'
            }
        }
        stage('start local server') {
             steps {
                // start local server in the background
                // we will shut it down in "post" command block
                sh 'nohup npm run start &'
              }
            }
        stage('Test Start') {
            steps {
                script {
                    wrap([$class: 'Xvfb', screen: '1920x1080x24', debug: true]) {
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
      sh 'pkill -f http-server'
    }
  }
}
