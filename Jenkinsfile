pipeline {
    agent any
    stages {
        stage('Checkout') { 
            steps { 
                checkout scm 
            } 
        }
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
        stage('Deploy with Docker Compose') {
            steps { 
                sh 'docker-compose up -d' 
            }
        }
        stage('Deploy with Ansible') {
            steps {
                dir('ansible') {
                    // For Linux, use direct ansible commands
                    sh 'ansible-galaxy install -r requirements.yml --roles-path roles || true'
                    sh 'ansible-playbook playbooks/docker-deploy.yml -v -i inventory/hosts.yml'
                }
            }
        }
    }
    post {
        always { 
            sh 'docker-compose logs' 
            sh 'docker ps -a'
        }
        success { 
            echo 'Pipeline succeeded! All services deployed.' 
        }
        failure { 
            echo 'Pipeline failed! Check logs above.' 
        }
        cleanup {
            sh 'docker system prune -f'  // Clean up unused Docker resources
        }
    }
}