pipeline {
    agent any
    
    stages {
        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    sh 'docker build -t fashion .'
                }
            }
        }
        
        stage('Build Backend') {
            steps {
                dir('backend') {
                    sh 'docker build -t fashion-backend .'
                }
            }
        }
        
        stage('Build Admin') {
            steps {
                dir('admin') {
                    sh 'docker build -t admin-dev .'
                }
            }
        }
        
        stage('Deploy') {
            steps {
                sh 'docker-compose up -d'
            }
        }
    }
    
    post {
        always {
            sh 'docker-compose logs'
        }
    }
}