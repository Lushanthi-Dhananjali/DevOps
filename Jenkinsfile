pipeline {
    agent any
    stages {
        stage('Checkout') { steps { checkout scm } }
        stage('Build Frontend') {
            steps { dir('frontend') { bat 'docker build -t fashion .' } }
        }
        stage('Build Backend') {
            steps { dir('backend') { bat 'docker build -t fashion-backend .' } }
        }
        stage('Build Admin') {
            steps { dir('admin') { bat 'docker build -t admin-dev .' } }
        }
        stage('Deploy with Docker Compose') {
            steps { bat 'docker-compose up -d' }
        }
        stage('Deploy with Ansible') {
            steps {
                // run ansible from WSL so 'ansible-playbook' and linux paths work
                dir('ansible') {
                    // install roles then run playbook inside WSL
                    bat 'wsl ansible-galaxy install -r requirements.yml --roles-path roles || true'
                    bat 'wsl ansible-playbook playbooks/docker-deploy.yml -v -i inventory/hosts.yml'
                }
            }
        }
    }
    post {
        always { bat 'docker-compose logs' }
        success { echo 'Pipeline succeeded! All services deployed.' }
        failure { echo 'Pipeline failed! Check logs above.' }
    }
}