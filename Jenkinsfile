pipeline {
    agent any

    stages {
        stage('Build') {
            agent {
                docker {
                    image 'node:18-alpine'
                    reuseNode true
                }
            }

            steps {
                echo 'Building...'

                sh '''
                    node --version

                    npm ci
                    npm run build
                '''
            }
        }

        stage('Test') {
            steps {
                sh '''
                echo "Testing..."
            '''
            }
        }
    }
    post {
        always {
            sh '''
               test -d ./test && echo  "test exists"
            '''

            cleanWs()
        }
    }
}
