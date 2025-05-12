pipeline {
    agent any 

    stage('Test') {
        
        steps {
            cleanWs()

            sh """
                echo "Testing..."

                 mkdir test

                ls -la
            """
        }
    }

    post {
        always {
            sh """
               test -d ./test && echo  "test exists"
            """
        }
    }
}