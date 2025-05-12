pipeline {
    agent {
        docker {
            image 'node:18-alpine'
            reuseNode true
        }
    }

    stages {

        stage('Build') {
            steps {
                echo "Building..."

                sh """
                    sh node --version

                    npm ci
                    npm run build
                """
            }
        }

        stage('Test') {
            steps {
                cleanWs()

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
        }
    }
}
