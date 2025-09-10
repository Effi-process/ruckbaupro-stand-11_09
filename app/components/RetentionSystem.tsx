'use client';

import React, { useState, useEffect } from 'react';

// Type definition for CustomerProfile
interface CustomerProfile {
  id: string;
  name: string;
  email: string;
  totalSpent: number;
  lastPurchase: Date;
  segment: string;
}

interface RetentionCampaign {
  id: string;
  name: string;
  type: 'follow-up' | 'maintenance' | 'referral' | 'vip' | 'loyalty';
  trigger: string;
  targetSegment: string[];
  automationRules: AutomationRule[];
  conversionRate: number;
  revenue: number;
  status: 'active' | 'paused' | 'completed';
  nextExecution: Date;
}

interface AutomationRule {
  condition: string;
  action: string;
  timing: string;
  channel: 'email' | 'sms' | 'call' | 'letter';
}

interface FollowUpSchedule {
  customerId: string;
  customerName: string;
  lastService: Date;
  nextFollowUp: Date;
  serviceType: string;
  priority: 'low' | 'medium' | 'high' | 'critical';
  automatedActions: string[];
  potentialRevenue: number;
}

interface LoyaltyMember {
  id: string;
  name: string;
  email: string;
  phone: string;
  joinDate: Date;
  totalSpent: number;
  points: number;
  tier: 'Bronze' | 'Silver' | 'Gold' | 'Platinum';
  nextReward: string;
  referrals: number;
}

const RetentionSystem: React.FC = () => {
  const [campaigns, setCampaigns] = useState<RetentionCampaign[]>([]);
  const [followUpSchedule, setFollowUpSchedule] = useState<FollowUpSchedule[]>([]);
  const [loyaltyMembers, setLoyaltyMembers] = useState<LoyaltyMember[]>([]);
  const [activeTab, setActiveTab] = useState<'overview' | 'campaigns' | 'followups' | 'loyalty' | 'referrals'>('overview');

  useEffect(() => {
    initializeRetentionData();
  }, []);

  const initializeRetentionData = () => {
    // Initialize retention campaigns
    const initialCampaigns: RetentionCampaign[] = [
      {
        id: 'follow-up-6m',
        name: '6-Monats Nachkontrolle',
        type: 'follow-up',
        trigger: '6 months after service completion',
        targetSegment: ['emergency', 'planned'],
        automationRules: [
          {
            condition: '180 days since last service',
            action: 'Send follow-up inspection offer',
            timing: '180 days',
            channel: 'email'
          },
          {
            condition: 'No response after 7 days',
            action: 'Send SMS reminder',
            timing: '187 days',
            channel: 'sms'
          },
          {
            condition: 'No response after 14 days',
            action: 'Personal call',
            timing: '194 days',
            channel: 'call'
          }
        ],
        conversionRate: 23.5,
        revenue: 45600,
        status: 'active',
        nextExecution: new Date(Date.now() + 86400000)
      },
      {
        id: 'maintenance-12m',
        name: 'Jahres-Wartungsvertrag',
        type: 'maintenance',
        trigger: '12 months after service completion',
        targetSegment: ['commercial', 'planned'],
        automationRules: [
          {
            condition: '330 days since last service',
            action: 'Send maintenance contract proposal',
            timing: '330 days',
            channel: 'email'
          },
          {
            condition: 'High-value customer (>€10k)',
            action: 'Personal consultation offer',
            timing: '340 days',
            channel: 'call'
          }
        ],
        conversionRate: 67.8,
        revenue: 123400,
        status: 'active',
        nextExecution: new Date(Date.now() + 172800000)
      },
      {
        id: 'referral-program',
        name: 'Empfehlungs-Bonus',
        type: 'referral',
        trigger: 'Service completion + satisfaction score >4',
        targetSegment: ['emergency', 'planned', 'commercial'],
        automationRules: [
          {
            condition: 'Service completed successfully',
            action: 'Send referral invitation with bonus',
            timing: '7 days',
            channel: 'email'
          },
          {
            condition: 'Referral made but not converted',
            action: 'Send conversion incentive',
            timing: '30 days',
            channel: 'sms'
          }
        ],
        conversionRate: 34.2,
        revenue: 78900,
        status: 'active',
        nextExecution: new Date(Date.now() + 43200000)
      },
      {
        id: 'vip-club',
        name: 'VIP-Kundenclub',
        type: 'vip',
        trigger: 'Customer lifetime value >€25k',
        targetSegment: ['commercial'],
        automationRules: [
          {
            condition: 'CLV exceeds €25,000',
            action: 'VIP club invitation',
            timing: 'immediate',
            channel: 'call'
          },
          {
            condition: 'VIP member inactive >90 days',
            action: 'Exclusive offer',
            timing: '90 days',
            channel: 'letter'
          }
        ],
        conversionRate: 89.3,
        revenue: 234500,
        status: 'active',
        nextExecution: new Date(Date.now() + 259200000)
      }
    ];

    // Initialize follow-up schedule
    const initialFollowUps: FollowUpSchedule[] = [
      {
        customerId: 'cust_001',
        customerName: 'Max Mustermann',
        lastService: new Date('2024-02-15'),
        nextFollowUp: new Date('2024-08-15'),
        serviceType: 'Vollsanierung',
        priority: 'high',
        automatedActions: ['Email gesendet', 'SMS-Erinnerung geplant'],
        potentialRevenue: 3500
      },
      {
        customerId: 'cust_002',
        customerName: 'Immobilien GmbH Schmidt',
        lastService: new Date('2024-01-20'),
        nextFollowUp: new Date('2024-07-20'),
        serviceType: 'Gewerbe-Sanierung',
        priority: 'critical',
        automatedActions: ['Wartungsvertrag vorgeschlagen', 'Persönlicher Termin vereinbart'],
        potentialRevenue: 15000
      },
      {
        customerId: 'cust_003',
        customerName: 'Familie Weber',
        lastService: new Date('2024-03-10'),
        nextFollowUp: new Date('2024-09-10'),
        serviceType: 'Dachsanierung',
        priority: 'medium',
        automatedActions: ['Erste Erinnerung gesendet'],
        potentialRevenue: 2800
      }
    ];

    // Initialize loyalty members
    const initialLoyaltyMembers: LoyaltyMember[] = [
      {
        id: 'loyal_001',
        name: 'Thomas Richter',
        email: 'thomas.richter@email.com',
        phone: '+49 521 123456',
        joinDate: new Date('2023-06-15'),
        totalSpent: 45600,
        points: 4560,
        tier: 'Platinum',
        nextReward: 'Kostenlose Luftqualitätsmessung',
        referrals: 7
      },
      {
        id: 'loyal_002',
        name: 'Sarah Becker',
        email: 'sarah.becker@email.com',
        phone: '+49 521 234567',
        joinDate: new Date('2023-09-20'),
        totalSpent: 23400,
        points: 2340,
        tier: 'Gold',
        nextReward: '20% Rabatt auf nächsten Service',
        referrals: 3
      },
      {
        id: 'loyal_003',
        name: 'Michael Chen',
        email: 'michael.chen@email.com',
        phone: '+49 521 345678',
        joinDate: new Date('2024-01-10'),
        totalSpent: 8900,
        points: 890,
        tier: 'Silver',
        nextReward: 'Kostenlose Beratung',
        referrals: 1
      }
    ];

    setCampaigns(initialCampaigns);
    setFollowUpSchedule(initialFollowUps);
    setLoyaltyMembers(initialLoyaltyMembers);
  };

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString('de-DE');
  };

  const getPriorityColor = (priority: string): string => {
    const colors: Record<string, string> = {
      'low': 'bg-gray-100 text-gray-800',
      'medium': 'bg-yellow-100 text-yellow-800',
      'high': 'bg-orange-100 text-orange-800',
      'critical': 'bg-red-100 text-red-800'
    };
    return colors[priority] || 'bg-gray-100 text-gray-800';
  };

  const getTierColor = (tier: string): string => {
    const colors: Record<string, string> = {
      'Bronze': 'bg-amber-100 text-amber-800',
      'Silver': 'bg-gray-100 text-gray-800',
      'Gold': 'bg-yellow-100 text-yellow-800',
      'Platinum': 'bg-purple-100 text-purple-800'
    };
    return colors[tier] || 'bg-gray-100 text-gray-800';
  };

  const getTierIcon = (tier: string): string => {
    const icons: Record<string, string> = {
      'Bronze': '🥉',
      'Silver': '🥈',
      'Gold': '🥇',
      'Platinum': '💎'
    };
    return icons[tier] || '🏅';
  };

  const getChannelIcon = (channel: string): string => {
    const icons: Record<string, string> = {
      'email': '📧',
      'sms': '📱',
      'call': '📞',
      'letter': '📮'
    };
    return icons[channel] || '📧';
  };

  const totalRetentionRevenue = campaigns.reduce((sum, campaign) => sum + campaign.revenue, 0);
  const totalFollowUpValue = followUpSchedule.reduce((sum, followUp) => sum + followUp.potentialRevenue, 0);
  const averageConversionRate = campaigns.reduce((sum, campaign) => sum + campaign.conversionRate, 0) / campaigns.length;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            🔄 Customer Retention System
          </h1>
          <p className="text-gray-600">
            Automatisierte Kundenbindung und Revenue-Maximierung
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-6">
          <div className="flex space-x-2">
            {[
              { id: 'overview', label: 'Übersicht', icon: '📊' },
              { id: 'campaigns', label: 'Kampagnen', icon: '🎯' },
              { id: 'followups', label: 'Follow-Ups', icon: '📅' },
              { id: 'loyalty', label: 'Loyalty Club', icon: '⭐' },
              { id: 'referrals', label: 'Empfehlungen', icon: '👥' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {activeTab === 'overview' && (
          <>
            {/* Overview Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-gray-500">Retention Revenue</h3>
                  <span className="text-2xl">💰</span>
                </div>
                <div className="text-2xl font-bold text-gray-900">
                  {formatCurrency(totalRetentionRevenue)}
                </div>
                <div className="text-sm text-green-600 mt-1">
                  +23.4% vs letzter Monat
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-gray-500">Aktive Kampagnen</h3>
                  <span className="text-2xl">🎯</span>
                </div>
                <div className="text-2xl font-bold text-gray-900">
                  {campaigns.filter(c => c.status === 'active').length}
                </div>
                <div className="text-sm text-blue-600 mt-1">
                  {campaigns.length} gesamt
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-gray-500">Ø Conversion Rate</h3>
                  <span className="text-2xl">📈</span>
                </div>
                <div className="text-2xl font-bold text-gray-900">
                  {averageConversionRate.toFixed(1)}%
                </div>
                <div className="text-sm text-green-600 mt-1">
                  +5.7% vs Branchenschnitt
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-gray-500">Follow-Up Value</h3>
                  <span className="text-2xl">📅</span>
                </div>
                <div className="text-2xl font-bold text-gray-900">
                  {formatCurrency(totalFollowUpValue)}
                </div>
                <div className="text-sm text-purple-600 mt-1">
                  {followUpSchedule.length} anstehend
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">⚡ Sofort-Aktionen</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button className="p-4 border-2 border-dashed border-blue-300 rounded-lg hover:border-blue-500 transition-colors text-center">
                  <div className="text-2xl mb-2">📧</div>
                  <div className="font-medium text-gray-900">Neue Kampagne</div>
                  <div className="text-sm text-gray-600">Email-Automation erstellen</div>
                </button>
                <button className="p-4 border-2 border-dashed border-green-300 rounded-lg hover:border-green-500 transition-colors text-center">
                  <div className="text-2xl mb-2">📞</div>
                  <div className="font-medium text-gray-900">Follow-Up Call</div>
                  <div className="text-sm text-gray-600">Persönliche Nachfrage</div>
                </button>
                <button className="p-4 border-2 border-dashed border-purple-300 rounded-lg hover:border-purple-500 transition-colors text-center">
                  <div className="text-2xl mb-2">🎁</div>
                  <div className="font-medium text-gray-900">Loyalty Reward</div>
                  <div className="text-sm text-gray-600">Belohnung versenden</div>
                </button>
              </div>
            </div>
          </>
        )}

        {activeTab === 'campaigns' && (
          <div className="space-y-6">
            {campaigns.map((campaign, index) => (
              <div key={campaign.id} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">
                      {campaign.type === 'follow-up' ? '📅' :
                       campaign.type === 'maintenance' ? '🔧' :
                       campaign.type === 'referral' ? '👥' :
                       campaign.type === 'vip' ? '⭐' : '🎯'}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{campaign.name}</h3>
                      <p className="text-sm text-gray-600">{campaign.trigger}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="text-sm font-medium text-gray-500">Conversion</div>
                      <div className="text-lg font-bold text-green-600">{campaign.conversionRate}%</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-gray-500">Revenue</div>
                      <div className="text-lg font-bold text-blue-600">{formatCurrency(campaign.revenue)}</div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      campaign.status === 'active' ? 'bg-green-100 text-green-800' :
                      campaign.status === 'paused' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {campaign.status}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Zielgruppen</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {campaign.targetSegment.map((segment, segmentIndex) => (
                        <span key={segmentIndex} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                          {segment}
                        </span>
                      ))}
                    </div>
                    <div className="text-sm text-gray-600">
                      <strong>Nächste Ausführung:</strong> {formatDate(campaign.nextExecution)}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Automation Rules</h4>
                    <div className="space-y-2">
                      {campaign.automationRules.map((rule, ruleIndex) => (
                        <div key={ruleIndex} className="flex items-center space-x-2 text-sm">
                          <span className="text-lg">{getChannelIcon(rule.channel)}</span>
                          <div className="flex-1">
                            <div className="font-medium text-gray-900">{rule.action}</div>
                            <div className="text-gray-600">{rule.condition} • {rule.timing}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'followups' && (
          <div className="space-y-4">
            {followUpSchedule.map((followUp, index) => (
              <div key={followUp.customerId} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="text-2xl">👤</div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{followUp.customerName}</h3>
                      <div className="text-sm text-gray-600">
                        {followUp.serviceType} • {formatDate(followUp.lastService)}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="text-sm font-medium text-gray-500">Potenzial</div>
                      <div className="text-lg font-bold text-green-600">
                        {formatCurrency(followUp.potentialRevenue)}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-gray-500">Nächster Follow-Up</div>
                      <div className="text-lg font-bold text-blue-600">
                        {formatDate(followUp.nextFollowUp)}
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(followUp.priority)}`}>
                      {followUp.priority.toUpperCase()}
                    </span>
                  </div>
                </div>
                
                <div className="mt-4">
                  <h4 className="font-medium text-gray-900 mb-2">Automatisierte Aktionen</h4>
                  <div className="flex flex-wrap gap-2">
                    {followUp.automatedActions.map((action, actionIndex) => (
                      <span key={actionIndex} className="px-3 py-1 bg-green-100 text-green-800 rounded-lg text-sm">
                        ✓ {action}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'loyalty' && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🏆 Loyalty Club Übersicht</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-4 bg-amber-50 rounded-lg">
                  <div className="text-2xl mb-2">🥉</div>
                  <div className="font-bold text-amber-800">Bronze</div>
                  <div className="text-sm text-amber-600">€0 - €5.000</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl mb-2">🥈</div>
                  <div className="font-bold text-gray-800">Silver</div>
                  <div className="text-sm text-gray-600">€5.000 - €15.000</div>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <div className="text-2xl mb-2">🥇</div>
                  <div className="font-bold text-yellow-800">Gold</div>
                  <div className="text-sm text-yellow-600">€15.000 - €35.000</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl mb-2">💎</div>
                  <div className="font-bold text-purple-800">Platinum</div>
                  <div className="text-sm text-purple-600">€35.000+</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {loyaltyMembers.map((member, index) => (
                <div key={member.id} className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="text-3xl">{getTierIcon(member.tier)}</div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                        <div className="text-sm text-gray-600">{member.email}</div>
                        <div className="text-sm text-gray-600">Mitglied seit {formatDate(member.joinDate)}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-6">
                      <div className="text-center">
                        <div className="text-sm font-medium text-gray-500">Ausgaben</div>
                        <div className="text-lg font-bold text-gray-900">
                          {formatCurrency(member.totalSpent)}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-medium text-gray-500">Punkte</div>
                        <div className="text-lg font-bold text-blue-600">{member.points}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-medium text-gray-500">Empfehlungen</div>
                        <div className="text-lg font-bold text-green-600">{member.referrals}</div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTierColor(member.tier)}`}>
                        {member.tier}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <div className="text-sm font-medium text-blue-900">Nächste Belohnung:</div>
                    <div className="text-sm text-blue-700">{member.nextReward}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'referrals' && (
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">👥 Empfehlungsprogramm</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <div className="text-3xl mb-2">🎁</div>
                <div className="text-2xl font-bold text-green-600">€500</div>
                <div className="text-sm text-green-700">Empfehler-Bonus</div>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="text-3xl mb-2">💰</div>
                <div className="text-2xl font-bold text-blue-600">15%</div>
                <div className="text-sm text-blue-700">Neukunden-Rabatt</div>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <div className="text-3xl mb-2">📈</div>
                <div className="text-2xl font-bold text-purple-600">67</div>
                <div className="text-sm text-purple-700">Erfolgreiche Empfehlungen</div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Top Empfehler</h4>
              {loyaltyMembers.sort((a, b) => b.referrals - a.referrals).slice(0, 5).map((member, index) => (
                <div key={member.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">
                      {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '🏅'}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{member.name}</div>
                      <div className="text-sm text-gray-600">{member.tier} Mitglied</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-600">{member.referrals}</div>
                    <div className="text-sm text-gray-600">Empfehlungen</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RetentionSystem;