# `group` Submodule <a name="`group` Submodule" id="@cdktf/provider-ionoscloud.group"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Group <a name="Group" id="@cdktf/provider-ionoscloud.group.Group"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group ionoscloud_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.group.Group.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import group

group.Group(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  access_activity_log: typing.Union[bool, IResolvable] = None,
  access_and_manage_ai_model_hub: typing.Union[bool, IResolvable] = None,
  access_and_manage_api_gateway: typing.Union[bool, IResolvable] = None,
  access_and_manage_cdn: typing.Union[bool, IResolvable] = None,
  access_and_manage_certificates: typing.Union[bool, IResolvable] = None,
  access_and_manage_dns: typing.Union[bool, IResolvable] = None,
  access_and_manage_iam_resources: typing.Union[bool, IResolvable] = None,
  access_and_manage_kaas: typing.Union[bool, IResolvable] = None,
  access_and_manage_logging: typing.Union[bool, IResolvable] = None,
  access_and_manage_monitoring: typing.Union[bool, IResolvable] = None,
  access_and_manage_network_file_storage: typing.Union[bool, IResolvable] = None,
  access_and_manage_vpn: typing.Union[bool, IResolvable] = None,
  create_backup_unit: typing.Union[bool, IResolvable] = None,
  create_datacenter: typing.Union[bool, IResolvable] = None,
  create_flow_log: typing.Union[bool, IResolvable] = None,
  create_internet_access: typing.Union[bool, IResolvable] = None,
  create_k8_s_cluster: typing.Union[bool, IResolvable] = None,
  create_network_security_groups: typing.Union[bool, IResolvable] = None,
  create_pcc: typing.Union[bool, IResolvable] = None,
  create_snapshot: typing.Union[bool, IResolvable] = None,
  id: str = None,
  manage_dataplatform: typing.Union[bool, IResolvable] = None,
  manage_dbaas: typing.Union[bool, IResolvable] = None,
  manage_registry: typing.Union[bool, IResolvable] = None,
  reserve_ip: typing.Union[bool, IResolvable] = None,
  s3_privilege: typing.Union[bool, IResolvable] = None,
  timeouts: GroupTimeouts = None,
  user_id: str = None,
  user_ids: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#name Group#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.accessActivityLog">access_activity_log</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#access_activity_log Group#access_activity_log}. |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.accessAndManageAiModelHub">access_and_manage_ai_model_hub</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Privilege for a group to access and manage AiModelHub. |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.accessAndManageApiGateway">access_and_manage_api_gateway</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Privilege for a group to access and manage ApiGateway. |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.accessAndManageCdn">access_and_manage_cdn</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Privilege for a group to access and manage Cdn. |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.accessAndManageCertificates">access_and_manage_certificates</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Privilege for a group to access and manage certificates. |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.accessAndManageDns">access_and_manage_dns</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Privilege for a group to access and manage dns records. |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.accessAndManageIamResources">access_and_manage_iam_resources</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Privilege for a group to access and manage IamResources. |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.accessAndManageKaas">access_and_manage_kaas</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Privilege for a group to access and manage Kaas. |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.accessAndManageLogging">access_and_manage_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Privilege for a group to access and manage logging. |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.accessAndManageMonitoring">access_and_manage_monitoring</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Privilege for a group to access and manage monitoring related functionality (access metrics, CRUD on alarms, alarm-actions etc) using Monotoring-as-a-Service (MaaS). |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.accessAndManageNetworkFileStorage">access_and_manage_network_file_storage</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Privilege for a group to access and manage NetworkFileStorage. |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.accessAndManageVpn">access_and_manage_vpn</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Privilege for a group to access and manage Vpn. |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.createBackupUnit">create_backup_unit</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Create backup unit privilege. |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.createDatacenter">create_datacenter</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#create_datacenter Group#create_datacenter}. |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.createFlowLog">create_flow_log</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Create Flow Logs privilege. |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.createInternetAccess">create_internet_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Create internet access privilege. |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.createK8SCluster">create_k8_s_cluster</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Create Kubernetes cluster privilege. |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.createNetworkSecurityGroups">create_network_security_groups</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Create Network Security groups. |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.createPcc">create_pcc</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#create_pcc Group#create_pcc}. |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.createSnapshot">create_snapshot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#create_snapshot Group#create_snapshot}. |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#id Group#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.manageDataplatform">manage_dataplatform</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Privilege for a group to access and manage the Data Platform. |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.manageDbaas">manage_dbaas</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Privilege for a group to manage DBaaS related functionality. |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.manageRegistry">manage_registry</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Privilege for group accessing container registry related functionality. |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.reserveIp">reserve_ip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#reserve_ip Group#reserve_ip}. |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.s3Privilege">s3_privilege</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#s3_privilege Group#s3_privilege}. |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeouts">GroupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.userId">user_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#user_id Group#user_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.userIds">user_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#user_ids Group#user_ids}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#name Group#name}.

---

##### `access_activity_log`<sup>Optional</sup> <a name="access_activity_log" id="@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.accessActivityLog"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#access_activity_log Group#access_activity_log}.

---

##### `access_and_manage_ai_model_hub`<sup>Optional</sup> <a name="access_and_manage_ai_model_hub" id="@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.accessAndManageAiModelHub"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Privilege for a group to access and manage AiModelHub.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#access_and_manage_ai_model_hub Group#access_and_manage_ai_model_hub}

---

##### `access_and_manage_api_gateway`<sup>Optional</sup> <a name="access_and_manage_api_gateway" id="@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.accessAndManageApiGateway"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Privilege for a group to access and manage ApiGateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#access_and_manage_api_gateway Group#access_and_manage_api_gateway}

---

##### `access_and_manage_cdn`<sup>Optional</sup> <a name="access_and_manage_cdn" id="@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.accessAndManageCdn"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Privilege for a group to access and manage Cdn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#access_and_manage_cdn Group#access_and_manage_cdn}

---

##### `access_and_manage_certificates`<sup>Optional</sup> <a name="access_and_manage_certificates" id="@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.accessAndManageCertificates"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Privilege for a group to access and manage certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#access_and_manage_certificates Group#access_and_manage_certificates}

---

##### `access_and_manage_dns`<sup>Optional</sup> <a name="access_and_manage_dns" id="@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.accessAndManageDns"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Privilege for a group to access and manage dns records.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#access_and_manage_dns Group#access_and_manage_dns}

---

##### `access_and_manage_iam_resources`<sup>Optional</sup> <a name="access_and_manage_iam_resources" id="@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.accessAndManageIamResources"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Privilege for a group to access and manage IamResources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#access_and_manage_iam_resources Group#access_and_manage_iam_resources}

---

##### `access_and_manage_kaas`<sup>Optional</sup> <a name="access_and_manage_kaas" id="@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.accessAndManageKaas"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Privilege for a group to access and manage Kaas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#access_and_manage_kaas Group#access_and_manage_kaas}

---

##### `access_and_manage_logging`<sup>Optional</sup> <a name="access_and_manage_logging" id="@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.accessAndManageLogging"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Privilege for a group to access and manage logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#access_and_manage_logging Group#access_and_manage_logging}

---

##### `access_and_manage_monitoring`<sup>Optional</sup> <a name="access_and_manage_monitoring" id="@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.accessAndManageMonitoring"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Privilege for a group to access and manage monitoring related functionality (access metrics, CRUD on alarms, alarm-actions etc) using Monotoring-as-a-Service (MaaS).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#access_and_manage_monitoring Group#access_and_manage_monitoring}

---

##### `access_and_manage_network_file_storage`<sup>Optional</sup> <a name="access_and_manage_network_file_storage" id="@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.accessAndManageNetworkFileStorage"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Privilege for a group to access and manage NetworkFileStorage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#access_and_manage_network_file_storage Group#access_and_manage_network_file_storage}

---

##### `access_and_manage_vpn`<sup>Optional</sup> <a name="access_and_manage_vpn" id="@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.accessAndManageVpn"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Privilege for a group to access and manage Vpn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#access_and_manage_vpn Group#access_and_manage_vpn}

---

##### `create_backup_unit`<sup>Optional</sup> <a name="create_backup_unit" id="@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.createBackupUnit"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Create backup unit privilege.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#create_backup_unit Group#create_backup_unit}

---

##### `create_datacenter`<sup>Optional</sup> <a name="create_datacenter" id="@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.createDatacenter"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#create_datacenter Group#create_datacenter}.

---

##### `create_flow_log`<sup>Optional</sup> <a name="create_flow_log" id="@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.createFlowLog"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Create Flow Logs privilege.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#create_flow_log Group#create_flow_log}

---

##### `create_internet_access`<sup>Optional</sup> <a name="create_internet_access" id="@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.createInternetAccess"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Create internet access privilege.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#create_internet_access Group#create_internet_access}

---

##### `create_k8_s_cluster`<sup>Optional</sup> <a name="create_k8_s_cluster" id="@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.createK8SCluster"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Create Kubernetes cluster privilege.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#create_k8s_cluster Group#create_k8s_cluster}

---

##### `create_network_security_groups`<sup>Optional</sup> <a name="create_network_security_groups" id="@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.createNetworkSecurityGroups"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Create Network Security groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#create_network_security_groups Group#create_network_security_groups}

---

##### `create_pcc`<sup>Optional</sup> <a name="create_pcc" id="@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.createPcc"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#create_pcc Group#create_pcc}.

---

##### `create_snapshot`<sup>Optional</sup> <a name="create_snapshot" id="@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.createSnapshot"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#create_snapshot Group#create_snapshot}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#id Group#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `manage_dataplatform`<sup>Optional</sup> <a name="manage_dataplatform" id="@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.manageDataplatform"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Privilege for a group to access and manage the Data Platform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#manage_dataplatform Group#manage_dataplatform}

---

##### `manage_dbaas`<sup>Optional</sup> <a name="manage_dbaas" id="@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.manageDbaas"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Privilege for a group to manage DBaaS related functionality.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#manage_dbaas Group#manage_dbaas}

---

##### `manage_registry`<sup>Optional</sup> <a name="manage_registry" id="@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.manageRegistry"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Privilege for group accessing container registry related functionality.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#manage_registry Group#manage_registry}

---

##### `reserve_ip`<sup>Optional</sup> <a name="reserve_ip" id="@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.reserveIp"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#reserve_ip Group#reserve_ip}.

---

##### `s3_privilege`<sup>Optional</sup> <a name="s3_privilege" id="@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.s3Privilege"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#s3_privilege Group#s3_privilege}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.group.GroupTimeouts">GroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#timeouts Group#timeouts}

---

##### `user_id`<sup>Optional</sup> <a name="user_id" id="@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.userId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#user_id Group#user_id}.

---

##### `user_ids`<sup>Optional</sup> <a name="user_ids" id="@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.userIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#user_ids Group#user_ids}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.resetAccessActivityLog">reset_access_activity_log</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.resetAccessAndManageAiModelHub">reset_access_and_manage_ai_model_hub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.resetAccessAndManageApiGateway">reset_access_and_manage_api_gateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.resetAccessAndManageCdn">reset_access_and_manage_cdn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.resetAccessAndManageCertificates">reset_access_and_manage_certificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.resetAccessAndManageDns">reset_access_and_manage_dns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.resetAccessAndManageIamResources">reset_access_and_manage_iam_resources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.resetAccessAndManageKaas">reset_access_and_manage_kaas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.resetAccessAndManageLogging">reset_access_and_manage_logging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.resetAccessAndManageMonitoring">reset_access_and_manage_monitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.resetAccessAndManageNetworkFileStorage">reset_access_and_manage_network_file_storage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.resetAccessAndManageVpn">reset_access_and_manage_vpn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.resetCreateBackupUnit">reset_create_backup_unit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.resetCreateDatacenter">reset_create_datacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.resetCreateFlowLog">reset_create_flow_log</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.resetCreateInternetAccess">reset_create_internet_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.resetCreateK8SCluster">reset_create_k8_s_cluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.resetCreateNetworkSecurityGroups">reset_create_network_security_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.resetCreatePcc">reset_create_pcc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.resetCreateSnapshot">reset_create_snapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.resetManageDataplatform">reset_manage_dataplatform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.resetManageDbaas">reset_manage_dbaas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.resetManageRegistry">reset_manage_registry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.resetReserveIp">reset_reserve_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.resetS3Privilege">reset_s3_privilege</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.resetUserId">reset_user_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.resetUserIds">reset_user_ids</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.group.Group.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-ionoscloud.group.Group.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.group.Group.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.group.Group.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-ionoscloud.group.Group.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-ionoscloud.group.Group.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-ionoscloud.group.Group.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-ionoscloud.group.Group.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-ionoscloud.group.Group.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-ionoscloud.group.Group.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-ionoscloud.group.Group.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-ionoscloud.group.Group.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.group.Group.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.group.Group.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.group.Group.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.group.Group.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.group.Group.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.group.Group.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.group.Group.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.group.Group.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.group.Group.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.group.Group.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.group.Group.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.group.Group.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.group.Group.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.group.Group.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.group.Group.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.group.Group.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.group.Group.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.group.Group.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-ionoscloud.group.Group.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-ionoscloud.group.Group.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.group.Group.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.group.Group.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.group.Group.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.group.Group.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-ionoscloud.group.Group.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.group.Group.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-ionoscloud.group.Group.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-ionoscloud.group.Group.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.group.Group.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-ionoscloud.group.Group.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.group.Group.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-ionoscloud.group.Group.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.group.Group.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#create Group#create}.

---

###### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.group.Group.putTimeouts.parameter.default"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#default Group#default}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.group.Group.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#delete Group#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.group.Group.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#update Group#update}.

---

##### `reset_access_activity_log` <a name="reset_access_activity_log" id="@cdktf/provider-ionoscloud.group.Group.resetAccessActivityLog"></a>

```python
def reset_access_activity_log() -> None
```

##### `reset_access_and_manage_ai_model_hub` <a name="reset_access_and_manage_ai_model_hub" id="@cdktf/provider-ionoscloud.group.Group.resetAccessAndManageAiModelHub"></a>

```python
def reset_access_and_manage_ai_model_hub() -> None
```

##### `reset_access_and_manage_api_gateway` <a name="reset_access_and_manage_api_gateway" id="@cdktf/provider-ionoscloud.group.Group.resetAccessAndManageApiGateway"></a>

```python
def reset_access_and_manage_api_gateway() -> None
```

##### `reset_access_and_manage_cdn` <a name="reset_access_and_manage_cdn" id="@cdktf/provider-ionoscloud.group.Group.resetAccessAndManageCdn"></a>

```python
def reset_access_and_manage_cdn() -> None
```

##### `reset_access_and_manage_certificates` <a name="reset_access_and_manage_certificates" id="@cdktf/provider-ionoscloud.group.Group.resetAccessAndManageCertificates"></a>

```python
def reset_access_and_manage_certificates() -> None
```

##### `reset_access_and_manage_dns` <a name="reset_access_and_manage_dns" id="@cdktf/provider-ionoscloud.group.Group.resetAccessAndManageDns"></a>

```python
def reset_access_and_manage_dns() -> None
```

##### `reset_access_and_manage_iam_resources` <a name="reset_access_and_manage_iam_resources" id="@cdktf/provider-ionoscloud.group.Group.resetAccessAndManageIamResources"></a>

```python
def reset_access_and_manage_iam_resources() -> None
```

##### `reset_access_and_manage_kaas` <a name="reset_access_and_manage_kaas" id="@cdktf/provider-ionoscloud.group.Group.resetAccessAndManageKaas"></a>

```python
def reset_access_and_manage_kaas() -> None
```

##### `reset_access_and_manage_logging` <a name="reset_access_and_manage_logging" id="@cdktf/provider-ionoscloud.group.Group.resetAccessAndManageLogging"></a>

```python
def reset_access_and_manage_logging() -> None
```

##### `reset_access_and_manage_monitoring` <a name="reset_access_and_manage_monitoring" id="@cdktf/provider-ionoscloud.group.Group.resetAccessAndManageMonitoring"></a>

```python
def reset_access_and_manage_monitoring() -> None
```

##### `reset_access_and_manage_network_file_storage` <a name="reset_access_and_manage_network_file_storage" id="@cdktf/provider-ionoscloud.group.Group.resetAccessAndManageNetworkFileStorage"></a>

```python
def reset_access_and_manage_network_file_storage() -> None
```

##### `reset_access_and_manage_vpn` <a name="reset_access_and_manage_vpn" id="@cdktf/provider-ionoscloud.group.Group.resetAccessAndManageVpn"></a>

```python
def reset_access_and_manage_vpn() -> None
```

##### `reset_create_backup_unit` <a name="reset_create_backup_unit" id="@cdktf/provider-ionoscloud.group.Group.resetCreateBackupUnit"></a>

```python
def reset_create_backup_unit() -> None
```

##### `reset_create_datacenter` <a name="reset_create_datacenter" id="@cdktf/provider-ionoscloud.group.Group.resetCreateDatacenter"></a>

```python
def reset_create_datacenter() -> None
```

##### `reset_create_flow_log` <a name="reset_create_flow_log" id="@cdktf/provider-ionoscloud.group.Group.resetCreateFlowLog"></a>

```python
def reset_create_flow_log() -> None
```

##### `reset_create_internet_access` <a name="reset_create_internet_access" id="@cdktf/provider-ionoscloud.group.Group.resetCreateInternetAccess"></a>

```python
def reset_create_internet_access() -> None
```

##### `reset_create_k8_s_cluster` <a name="reset_create_k8_s_cluster" id="@cdktf/provider-ionoscloud.group.Group.resetCreateK8SCluster"></a>

```python
def reset_create_k8_s_cluster() -> None
```

##### `reset_create_network_security_groups` <a name="reset_create_network_security_groups" id="@cdktf/provider-ionoscloud.group.Group.resetCreateNetworkSecurityGroups"></a>

```python
def reset_create_network_security_groups() -> None
```

##### `reset_create_pcc` <a name="reset_create_pcc" id="@cdktf/provider-ionoscloud.group.Group.resetCreatePcc"></a>

```python
def reset_create_pcc() -> None
```

##### `reset_create_snapshot` <a name="reset_create_snapshot" id="@cdktf/provider-ionoscloud.group.Group.resetCreateSnapshot"></a>

```python
def reset_create_snapshot() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-ionoscloud.group.Group.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_manage_dataplatform` <a name="reset_manage_dataplatform" id="@cdktf/provider-ionoscloud.group.Group.resetManageDataplatform"></a>

```python
def reset_manage_dataplatform() -> None
```

##### `reset_manage_dbaas` <a name="reset_manage_dbaas" id="@cdktf/provider-ionoscloud.group.Group.resetManageDbaas"></a>

```python
def reset_manage_dbaas() -> None
```

##### `reset_manage_registry` <a name="reset_manage_registry" id="@cdktf/provider-ionoscloud.group.Group.resetManageRegistry"></a>

```python
def reset_manage_registry() -> None
```

##### `reset_reserve_ip` <a name="reset_reserve_ip" id="@cdktf/provider-ionoscloud.group.Group.resetReserveIp"></a>

```python
def reset_reserve_ip() -> None
```

##### `reset_s3_privilege` <a name="reset_s3_privilege" id="@cdktf/provider-ionoscloud.group.Group.resetS3Privilege"></a>

```python
def reset_s3_privilege() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-ionoscloud.group.Group.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_user_id` <a name="reset_user_id" id="@cdktf/provider-ionoscloud.group.Group.resetUserId"></a>

```python
def reset_user_id() -> None
```

##### `reset_user_ids` <a name="reset_user_ids" id="@cdktf/provider-ionoscloud.group.Group.resetUserIds"></a>

```python
def reset_user_ids() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Group resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-ionoscloud.group.Group.isConstruct"></a>

```python
from cdktf_cdktf_provider_ionoscloud import group

group.Group.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.group.Group.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-ionoscloud.group.Group.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_ionoscloud import group

group.Group.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.group.Group.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-ionoscloud.group.Group.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_ionoscloud import group

group.Group.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.group.Group.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-ionoscloud.group.Group.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_ionoscloud import group

group.Group.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Group resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.group.Group.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-ionoscloud.group.Group.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Group to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-ionoscloud.group.Group.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Group that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.group.Group.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Group to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference">GroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.users">users</a></code> | <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersList">GroupUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.accessActivityLogInput">access_activity_log_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.accessAndManageAiModelHubInput">access_and_manage_ai_model_hub_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.accessAndManageApiGatewayInput">access_and_manage_api_gateway_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.accessAndManageCdnInput">access_and_manage_cdn_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.accessAndManageCertificatesInput">access_and_manage_certificates_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.accessAndManageDnsInput">access_and_manage_dns_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.accessAndManageIamResourcesInput">access_and_manage_iam_resources_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.accessAndManageKaasInput">access_and_manage_kaas_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.accessAndManageLoggingInput">access_and_manage_logging_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.accessAndManageMonitoringInput">access_and_manage_monitoring_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.accessAndManageNetworkFileStorageInput">access_and_manage_network_file_storage_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.accessAndManageVpnInput">access_and_manage_vpn_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.createBackupUnitInput">create_backup_unit_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.createDatacenterInput">create_datacenter_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.createFlowLogInput">create_flow_log_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.createInternetAccessInput">create_internet_access_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.createK8SClusterInput">create_k8_s_cluster_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.createNetworkSecurityGroupsInput">create_network_security_groups_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.createPccInput">create_pcc_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.createSnapshotInput">create_snapshot_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.manageDataplatformInput">manage_dataplatform_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.manageDbaasInput">manage_dbaas_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.manageRegistryInput">manage_registry_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.reserveIpInput">reserve_ip_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.s3PrivilegeInput">s3_privilege_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.group.GroupTimeouts">GroupTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.userIdInput">user_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.userIdsInput">user_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.accessActivityLog">access_activity_log</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.accessAndManageAiModelHub">access_and_manage_ai_model_hub</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.accessAndManageApiGateway">access_and_manage_api_gateway</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.accessAndManageCdn">access_and_manage_cdn</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.accessAndManageCertificates">access_and_manage_certificates</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.accessAndManageDns">access_and_manage_dns</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.accessAndManageIamResources">access_and_manage_iam_resources</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.accessAndManageKaas">access_and_manage_kaas</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.accessAndManageLogging">access_and_manage_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.accessAndManageMonitoring">access_and_manage_monitoring</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.accessAndManageNetworkFileStorage">access_and_manage_network_file_storage</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.accessAndManageVpn">access_and_manage_vpn</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.createBackupUnit">create_backup_unit</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.createDatacenter">create_datacenter</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.createFlowLog">create_flow_log</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.createInternetAccess">create_internet_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.createK8SCluster">create_k8_s_cluster</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.createNetworkSecurityGroups">create_network_security_groups</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.createPcc">create_pcc</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.createSnapshot">create_snapshot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.manageDataplatform">manage_dataplatform</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.manageDbaas">manage_dbaas</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.manageRegistry">manage_registry</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.reserveIp">reserve_ip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.s3Privilege">s3_privilege</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.userId">user_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.userIds">user_ids</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.group.Group.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-ionoscloud.group.Group.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.group.Group.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-ionoscloud.group.Group.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-ionoscloud.group.Group.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-ionoscloud.group.Group.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-ionoscloud.group.Group.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.group.Group.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.group.Group.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.group.Group.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.group.Group.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.group.Group.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.group.Group.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.group.Group.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.group.Group.property.timeouts"></a>

```python
timeouts: GroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference">GroupTimeoutsOutputReference</a>

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktf/provider-ionoscloud.group.Group.property.users"></a>

```python
users: GroupUsersList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.group.GroupUsersList">GroupUsersList</a>

---

##### `access_activity_log_input`<sup>Optional</sup> <a name="access_activity_log_input" id="@cdktf/provider-ionoscloud.group.Group.property.accessActivityLogInput"></a>

```python
access_activity_log_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `access_and_manage_ai_model_hub_input`<sup>Optional</sup> <a name="access_and_manage_ai_model_hub_input" id="@cdktf/provider-ionoscloud.group.Group.property.accessAndManageAiModelHubInput"></a>

```python
access_and_manage_ai_model_hub_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `access_and_manage_api_gateway_input`<sup>Optional</sup> <a name="access_and_manage_api_gateway_input" id="@cdktf/provider-ionoscloud.group.Group.property.accessAndManageApiGatewayInput"></a>

```python
access_and_manage_api_gateway_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `access_and_manage_cdn_input`<sup>Optional</sup> <a name="access_and_manage_cdn_input" id="@cdktf/provider-ionoscloud.group.Group.property.accessAndManageCdnInput"></a>

```python
access_and_manage_cdn_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `access_and_manage_certificates_input`<sup>Optional</sup> <a name="access_and_manage_certificates_input" id="@cdktf/provider-ionoscloud.group.Group.property.accessAndManageCertificatesInput"></a>

```python
access_and_manage_certificates_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `access_and_manage_dns_input`<sup>Optional</sup> <a name="access_and_manage_dns_input" id="@cdktf/provider-ionoscloud.group.Group.property.accessAndManageDnsInput"></a>

```python
access_and_manage_dns_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `access_and_manage_iam_resources_input`<sup>Optional</sup> <a name="access_and_manage_iam_resources_input" id="@cdktf/provider-ionoscloud.group.Group.property.accessAndManageIamResourcesInput"></a>

```python
access_and_manage_iam_resources_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `access_and_manage_kaas_input`<sup>Optional</sup> <a name="access_and_manage_kaas_input" id="@cdktf/provider-ionoscloud.group.Group.property.accessAndManageKaasInput"></a>

```python
access_and_manage_kaas_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `access_and_manage_logging_input`<sup>Optional</sup> <a name="access_and_manage_logging_input" id="@cdktf/provider-ionoscloud.group.Group.property.accessAndManageLoggingInput"></a>

```python
access_and_manage_logging_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `access_and_manage_monitoring_input`<sup>Optional</sup> <a name="access_and_manage_monitoring_input" id="@cdktf/provider-ionoscloud.group.Group.property.accessAndManageMonitoringInput"></a>

```python
access_and_manage_monitoring_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `access_and_manage_network_file_storage_input`<sup>Optional</sup> <a name="access_and_manage_network_file_storage_input" id="@cdktf/provider-ionoscloud.group.Group.property.accessAndManageNetworkFileStorageInput"></a>

```python
access_and_manage_network_file_storage_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `access_and_manage_vpn_input`<sup>Optional</sup> <a name="access_and_manage_vpn_input" id="@cdktf/provider-ionoscloud.group.Group.property.accessAndManageVpnInput"></a>

```python
access_and_manage_vpn_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `create_backup_unit_input`<sup>Optional</sup> <a name="create_backup_unit_input" id="@cdktf/provider-ionoscloud.group.Group.property.createBackupUnitInput"></a>

```python
create_backup_unit_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `create_datacenter_input`<sup>Optional</sup> <a name="create_datacenter_input" id="@cdktf/provider-ionoscloud.group.Group.property.createDatacenterInput"></a>

```python
create_datacenter_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `create_flow_log_input`<sup>Optional</sup> <a name="create_flow_log_input" id="@cdktf/provider-ionoscloud.group.Group.property.createFlowLogInput"></a>

```python
create_flow_log_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `create_internet_access_input`<sup>Optional</sup> <a name="create_internet_access_input" id="@cdktf/provider-ionoscloud.group.Group.property.createInternetAccessInput"></a>

```python
create_internet_access_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `create_k8_s_cluster_input`<sup>Optional</sup> <a name="create_k8_s_cluster_input" id="@cdktf/provider-ionoscloud.group.Group.property.createK8SClusterInput"></a>

```python
create_k8_s_cluster_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `create_network_security_groups_input`<sup>Optional</sup> <a name="create_network_security_groups_input" id="@cdktf/provider-ionoscloud.group.Group.property.createNetworkSecurityGroupsInput"></a>

```python
create_network_security_groups_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `create_pcc_input`<sup>Optional</sup> <a name="create_pcc_input" id="@cdktf/provider-ionoscloud.group.Group.property.createPccInput"></a>

```python
create_pcc_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `create_snapshot_input`<sup>Optional</sup> <a name="create_snapshot_input" id="@cdktf/provider-ionoscloud.group.Group.property.createSnapshotInput"></a>

```python
create_snapshot_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-ionoscloud.group.Group.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `manage_dataplatform_input`<sup>Optional</sup> <a name="manage_dataplatform_input" id="@cdktf/provider-ionoscloud.group.Group.property.manageDataplatformInput"></a>

```python
manage_dataplatform_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `manage_dbaas_input`<sup>Optional</sup> <a name="manage_dbaas_input" id="@cdktf/provider-ionoscloud.group.Group.property.manageDbaasInput"></a>

```python
manage_dbaas_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `manage_registry_input`<sup>Optional</sup> <a name="manage_registry_input" id="@cdktf/provider-ionoscloud.group.Group.property.manageRegistryInput"></a>

```python
manage_registry_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-ionoscloud.group.Group.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `reserve_ip_input`<sup>Optional</sup> <a name="reserve_ip_input" id="@cdktf/provider-ionoscloud.group.Group.property.reserveIpInput"></a>

```python
reserve_ip_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `s3_privilege_input`<sup>Optional</sup> <a name="s3_privilege_input" id="@cdktf/provider-ionoscloud.group.Group.property.s3PrivilegeInput"></a>

```python
s3_privilege_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-ionoscloud.group.Group.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.group.GroupTimeouts">GroupTimeouts</a>]

---

##### `user_id_input`<sup>Optional</sup> <a name="user_id_input" id="@cdktf/provider-ionoscloud.group.Group.property.userIdInput"></a>

```python
user_id_input: str
```

- *Type:* str

---

##### `user_ids_input`<sup>Optional</sup> <a name="user_ids_input" id="@cdktf/provider-ionoscloud.group.Group.property.userIdsInput"></a>

```python
user_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `access_activity_log`<sup>Required</sup> <a name="access_activity_log" id="@cdktf/provider-ionoscloud.group.Group.property.accessActivityLog"></a>

```python
access_activity_log: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `access_and_manage_ai_model_hub`<sup>Required</sup> <a name="access_and_manage_ai_model_hub" id="@cdktf/provider-ionoscloud.group.Group.property.accessAndManageAiModelHub"></a>

```python
access_and_manage_ai_model_hub: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `access_and_manage_api_gateway`<sup>Required</sup> <a name="access_and_manage_api_gateway" id="@cdktf/provider-ionoscloud.group.Group.property.accessAndManageApiGateway"></a>

```python
access_and_manage_api_gateway: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `access_and_manage_cdn`<sup>Required</sup> <a name="access_and_manage_cdn" id="@cdktf/provider-ionoscloud.group.Group.property.accessAndManageCdn"></a>

```python
access_and_manage_cdn: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `access_and_manage_certificates`<sup>Required</sup> <a name="access_and_manage_certificates" id="@cdktf/provider-ionoscloud.group.Group.property.accessAndManageCertificates"></a>

```python
access_and_manage_certificates: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `access_and_manage_dns`<sup>Required</sup> <a name="access_and_manage_dns" id="@cdktf/provider-ionoscloud.group.Group.property.accessAndManageDns"></a>

```python
access_and_manage_dns: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `access_and_manage_iam_resources`<sup>Required</sup> <a name="access_and_manage_iam_resources" id="@cdktf/provider-ionoscloud.group.Group.property.accessAndManageIamResources"></a>

```python
access_and_manage_iam_resources: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `access_and_manage_kaas`<sup>Required</sup> <a name="access_and_manage_kaas" id="@cdktf/provider-ionoscloud.group.Group.property.accessAndManageKaas"></a>

```python
access_and_manage_kaas: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `access_and_manage_logging`<sup>Required</sup> <a name="access_and_manage_logging" id="@cdktf/provider-ionoscloud.group.Group.property.accessAndManageLogging"></a>

```python
access_and_manage_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `access_and_manage_monitoring`<sup>Required</sup> <a name="access_and_manage_monitoring" id="@cdktf/provider-ionoscloud.group.Group.property.accessAndManageMonitoring"></a>

```python
access_and_manage_monitoring: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `access_and_manage_network_file_storage`<sup>Required</sup> <a name="access_and_manage_network_file_storage" id="@cdktf/provider-ionoscloud.group.Group.property.accessAndManageNetworkFileStorage"></a>

```python
access_and_manage_network_file_storage: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `access_and_manage_vpn`<sup>Required</sup> <a name="access_and_manage_vpn" id="@cdktf/provider-ionoscloud.group.Group.property.accessAndManageVpn"></a>

```python
access_and_manage_vpn: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `create_backup_unit`<sup>Required</sup> <a name="create_backup_unit" id="@cdktf/provider-ionoscloud.group.Group.property.createBackupUnit"></a>

```python
create_backup_unit: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `create_datacenter`<sup>Required</sup> <a name="create_datacenter" id="@cdktf/provider-ionoscloud.group.Group.property.createDatacenter"></a>

```python
create_datacenter: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `create_flow_log`<sup>Required</sup> <a name="create_flow_log" id="@cdktf/provider-ionoscloud.group.Group.property.createFlowLog"></a>

```python
create_flow_log: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `create_internet_access`<sup>Required</sup> <a name="create_internet_access" id="@cdktf/provider-ionoscloud.group.Group.property.createInternetAccess"></a>

```python
create_internet_access: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `create_k8_s_cluster`<sup>Required</sup> <a name="create_k8_s_cluster" id="@cdktf/provider-ionoscloud.group.Group.property.createK8SCluster"></a>

```python
create_k8_s_cluster: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `create_network_security_groups`<sup>Required</sup> <a name="create_network_security_groups" id="@cdktf/provider-ionoscloud.group.Group.property.createNetworkSecurityGroups"></a>

```python
create_network_security_groups: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `create_pcc`<sup>Required</sup> <a name="create_pcc" id="@cdktf/provider-ionoscloud.group.Group.property.createPcc"></a>

```python
create_pcc: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `create_snapshot`<sup>Required</sup> <a name="create_snapshot" id="@cdktf/provider-ionoscloud.group.Group.property.createSnapshot"></a>

```python
create_snapshot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.group.Group.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `manage_dataplatform`<sup>Required</sup> <a name="manage_dataplatform" id="@cdktf/provider-ionoscloud.group.Group.property.manageDataplatform"></a>

```python
manage_dataplatform: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `manage_dbaas`<sup>Required</sup> <a name="manage_dbaas" id="@cdktf/provider-ionoscloud.group.Group.property.manageDbaas"></a>

```python
manage_dbaas: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `manage_registry`<sup>Required</sup> <a name="manage_registry" id="@cdktf/provider-ionoscloud.group.Group.property.manageRegistry"></a>

```python
manage_registry: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.group.Group.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `reserve_ip`<sup>Required</sup> <a name="reserve_ip" id="@cdktf/provider-ionoscloud.group.Group.property.reserveIp"></a>

```python
reserve_ip: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `s3_privilege`<sup>Required</sup> <a name="s3_privilege" id="@cdktf/provider-ionoscloud.group.Group.property.s3Privilege"></a>

```python
s3_privilege: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktf/provider-ionoscloud.group.Group.property.userId"></a>

```python
user_id: str
```

- *Type:* str

---

##### `user_ids`<sup>Required</sup> <a name="user_ids" id="@cdktf/provider-ionoscloud.group.Group.property.userIds"></a>

```python
user_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.group.Group.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GroupConfig <a name="GroupConfig" id="@cdktf/provider-ionoscloud.group.GroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.group.GroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import group

group.GroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  access_activity_log: typing.Union[bool, IResolvable] = None,
  access_and_manage_ai_model_hub: typing.Union[bool, IResolvable] = None,
  access_and_manage_api_gateway: typing.Union[bool, IResolvable] = None,
  access_and_manage_cdn: typing.Union[bool, IResolvable] = None,
  access_and_manage_certificates: typing.Union[bool, IResolvable] = None,
  access_and_manage_dns: typing.Union[bool, IResolvable] = None,
  access_and_manage_iam_resources: typing.Union[bool, IResolvable] = None,
  access_and_manage_kaas: typing.Union[bool, IResolvable] = None,
  access_and_manage_logging: typing.Union[bool, IResolvable] = None,
  access_and_manage_monitoring: typing.Union[bool, IResolvable] = None,
  access_and_manage_network_file_storage: typing.Union[bool, IResolvable] = None,
  access_and_manage_vpn: typing.Union[bool, IResolvable] = None,
  create_backup_unit: typing.Union[bool, IResolvable] = None,
  create_datacenter: typing.Union[bool, IResolvable] = None,
  create_flow_log: typing.Union[bool, IResolvable] = None,
  create_internet_access: typing.Union[bool, IResolvable] = None,
  create_k8_s_cluster: typing.Union[bool, IResolvable] = None,
  create_network_security_groups: typing.Union[bool, IResolvable] = None,
  create_pcc: typing.Union[bool, IResolvable] = None,
  create_snapshot: typing.Union[bool, IResolvable] = None,
  id: str = None,
  manage_dataplatform: typing.Union[bool, IResolvable] = None,
  manage_dbaas: typing.Union[bool, IResolvable] = None,
  manage_registry: typing.Union[bool, IResolvable] = None,
  reserve_ip: typing.Union[bool, IResolvable] = None,
  s3_privilege: typing.Union[bool, IResolvable] = None,
  timeouts: GroupTimeouts = None,
  user_id: str = None,
  user_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#name Group#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.accessActivityLog">access_activity_log</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#access_activity_log Group#access_activity_log}. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.accessAndManageAiModelHub">access_and_manage_ai_model_hub</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Privilege for a group to access and manage AiModelHub. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.accessAndManageApiGateway">access_and_manage_api_gateway</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Privilege for a group to access and manage ApiGateway. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.accessAndManageCdn">access_and_manage_cdn</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Privilege for a group to access and manage Cdn. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.accessAndManageCertificates">access_and_manage_certificates</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Privilege for a group to access and manage certificates. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.accessAndManageDns">access_and_manage_dns</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Privilege for a group to access and manage dns records. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.accessAndManageIamResources">access_and_manage_iam_resources</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Privilege for a group to access and manage IamResources. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.accessAndManageKaas">access_and_manage_kaas</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Privilege for a group to access and manage Kaas. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.accessAndManageLogging">access_and_manage_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Privilege for a group to access and manage logging. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.accessAndManageMonitoring">access_and_manage_monitoring</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Privilege for a group to access and manage monitoring related functionality (access metrics, CRUD on alarms, alarm-actions etc) using Monotoring-as-a-Service (MaaS). |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.accessAndManageNetworkFileStorage">access_and_manage_network_file_storage</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Privilege for a group to access and manage NetworkFileStorage. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.accessAndManageVpn">access_and_manage_vpn</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Privilege for a group to access and manage Vpn. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.createBackupUnit">create_backup_unit</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Create backup unit privilege. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.createDatacenter">create_datacenter</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#create_datacenter Group#create_datacenter}. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.createFlowLog">create_flow_log</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Create Flow Logs privilege. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.createInternetAccess">create_internet_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Create internet access privilege. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.createK8SCluster">create_k8_s_cluster</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Create Kubernetes cluster privilege. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.createNetworkSecurityGroups">create_network_security_groups</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Create Network Security groups. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.createPcc">create_pcc</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#create_pcc Group#create_pcc}. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.createSnapshot">create_snapshot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#create_snapshot Group#create_snapshot}. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#id Group#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.manageDataplatform">manage_dataplatform</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Privilege for a group to access and manage the Data Platform. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.manageDbaas">manage_dbaas</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Privilege for a group to manage DBaaS related functionality. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.manageRegistry">manage_registry</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Privilege for group accessing container registry related functionality. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.reserveIp">reserve_ip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#reserve_ip Group#reserve_ip}. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.s3Privilege">s3_privilege</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#s3_privilege Group#s3_privilege}. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeouts">GroupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.userId">user_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#user_id Group#user_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.userIds">user_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#user_ids Group#user_ids}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#name Group#name}.

---

##### `access_activity_log`<sup>Optional</sup> <a name="access_activity_log" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.accessActivityLog"></a>

```python
access_activity_log: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#access_activity_log Group#access_activity_log}.

---

##### `access_and_manage_ai_model_hub`<sup>Optional</sup> <a name="access_and_manage_ai_model_hub" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.accessAndManageAiModelHub"></a>

```python
access_and_manage_ai_model_hub: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Privilege for a group to access and manage AiModelHub.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#access_and_manage_ai_model_hub Group#access_and_manage_ai_model_hub}

---

##### `access_and_manage_api_gateway`<sup>Optional</sup> <a name="access_and_manage_api_gateway" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.accessAndManageApiGateway"></a>

```python
access_and_manage_api_gateway: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Privilege for a group to access and manage ApiGateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#access_and_manage_api_gateway Group#access_and_manage_api_gateway}

---

##### `access_and_manage_cdn`<sup>Optional</sup> <a name="access_and_manage_cdn" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.accessAndManageCdn"></a>

```python
access_and_manage_cdn: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Privilege for a group to access and manage Cdn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#access_and_manage_cdn Group#access_and_manage_cdn}

---

##### `access_and_manage_certificates`<sup>Optional</sup> <a name="access_and_manage_certificates" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.accessAndManageCertificates"></a>

```python
access_and_manage_certificates: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Privilege for a group to access and manage certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#access_and_manage_certificates Group#access_and_manage_certificates}

---

##### `access_and_manage_dns`<sup>Optional</sup> <a name="access_and_manage_dns" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.accessAndManageDns"></a>

```python
access_and_manage_dns: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Privilege for a group to access and manage dns records.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#access_and_manage_dns Group#access_and_manage_dns}

---

##### `access_and_manage_iam_resources`<sup>Optional</sup> <a name="access_and_manage_iam_resources" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.accessAndManageIamResources"></a>

```python
access_and_manage_iam_resources: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Privilege for a group to access and manage IamResources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#access_and_manage_iam_resources Group#access_and_manage_iam_resources}

---

##### `access_and_manage_kaas`<sup>Optional</sup> <a name="access_and_manage_kaas" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.accessAndManageKaas"></a>

```python
access_and_manage_kaas: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Privilege for a group to access and manage Kaas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#access_and_manage_kaas Group#access_and_manage_kaas}

---

##### `access_and_manage_logging`<sup>Optional</sup> <a name="access_and_manage_logging" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.accessAndManageLogging"></a>

```python
access_and_manage_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Privilege for a group to access and manage logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#access_and_manage_logging Group#access_and_manage_logging}

---

##### `access_and_manage_monitoring`<sup>Optional</sup> <a name="access_and_manage_monitoring" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.accessAndManageMonitoring"></a>

```python
access_and_manage_monitoring: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Privilege for a group to access and manage monitoring related functionality (access metrics, CRUD on alarms, alarm-actions etc) using Monotoring-as-a-Service (MaaS).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#access_and_manage_monitoring Group#access_and_manage_monitoring}

---

##### `access_and_manage_network_file_storage`<sup>Optional</sup> <a name="access_and_manage_network_file_storage" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.accessAndManageNetworkFileStorage"></a>

```python
access_and_manage_network_file_storage: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Privilege for a group to access and manage NetworkFileStorage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#access_and_manage_network_file_storage Group#access_and_manage_network_file_storage}

---

##### `access_and_manage_vpn`<sup>Optional</sup> <a name="access_and_manage_vpn" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.accessAndManageVpn"></a>

```python
access_and_manage_vpn: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Privilege for a group to access and manage Vpn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#access_and_manage_vpn Group#access_and_manage_vpn}

---

##### `create_backup_unit`<sup>Optional</sup> <a name="create_backup_unit" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.createBackupUnit"></a>

```python
create_backup_unit: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Create backup unit privilege.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#create_backup_unit Group#create_backup_unit}

---

##### `create_datacenter`<sup>Optional</sup> <a name="create_datacenter" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.createDatacenter"></a>

```python
create_datacenter: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#create_datacenter Group#create_datacenter}.

---

##### `create_flow_log`<sup>Optional</sup> <a name="create_flow_log" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.createFlowLog"></a>

```python
create_flow_log: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Create Flow Logs privilege.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#create_flow_log Group#create_flow_log}

---

##### `create_internet_access`<sup>Optional</sup> <a name="create_internet_access" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.createInternetAccess"></a>

```python
create_internet_access: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Create internet access privilege.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#create_internet_access Group#create_internet_access}

---

##### `create_k8_s_cluster`<sup>Optional</sup> <a name="create_k8_s_cluster" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.createK8SCluster"></a>

```python
create_k8_s_cluster: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Create Kubernetes cluster privilege.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#create_k8s_cluster Group#create_k8s_cluster}

---

##### `create_network_security_groups`<sup>Optional</sup> <a name="create_network_security_groups" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.createNetworkSecurityGroups"></a>

```python
create_network_security_groups: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Create Network Security groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#create_network_security_groups Group#create_network_security_groups}

---

##### `create_pcc`<sup>Optional</sup> <a name="create_pcc" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.createPcc"></a>

```python
create_pcc: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#create_pcc Group#create_pcc}.

---

##### `create_snapshot`<sup>Optional</sup> <a name="create_snapshot" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.createSnapshot"></a>

```python
create_snapshot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#create_snapshot Group#create_snapshot}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#id Group#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `manage_dataplatform`<sup>Optional</sup> <a name="manage_dataplatform" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.manageDataplatform"></a>

```python
manage_dataplatform: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Privilege for a group to access and manage the Data Platform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#manage_dataplatform Group#manage_dataplatform}

---

##### `manage_dbaas`<sup>Optional</sup> <a name="manage_dbaas" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.manageDbaas"></a>

```python
manage_dbaas: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Privilege for a group to manage DBaaS related functionality.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#manage_dbaas Group#manage_dbaas}

---

##### `manage_registry`<sup>Optional</sup> <a name="manage_registry" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.manageRegistry"></a>

```python
manage_registry: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Privilege for group accessing container registry related functionality.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#manage_registry Group#manage_registry}

---

##### `reserve_ip`<sup>Optional</sup> <a name="reserve_ip" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.reserveIp"></a>

```python
reserve_ip: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#reserve_ip Group#reserve_ip}.

---

##### `s3_privilege`<sup>Optional</sup> <a name="s3_privilege" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.s3Privilege"></a>

```python
s3_privilege: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#s3_privilege Group#s3_privilege}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.timeouts"></a>

```python
timeouts: GroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.group.GroupTimeouts">GroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#timeouts Group#timeouts}

---

##### `user_id`<sup>Optional</sup> <a name="user_id" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.userId"></a>

```python
user_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#user_id Group#user_id}.

---

##### `user_ids`<sup>Optional</sup> <a name="user_ids" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.userIds"></a>

```python
user_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#user_ids Group#user_ids}.

---

### GroupTimeouts <a name="GroupTimeouts" id="@cdktf/provider-ionoscloud.group.GroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.group.GroupTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import group

group.GroupTimeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#create Group#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeouts.property.default">default</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#default Group#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#delete Group#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#update Group#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.group.GroupTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#create Group#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.group.GroupTimeouts.property.default"></a>

```python
default: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#default Group#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.group.GroupTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#delete Group#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.group.GroupTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#update Group#update}.

---

### GroupUsers <a name="GroupUsers" id="@cdktf/provider-ionoscloud.group.GroupUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.group.GroupUsers.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import group

group.GroupUsers()
```


## Classes <a name="Classes" id="Classes"></a>

### GroupTimeoutsOutputReference <a name="GroupTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import group

group.GroupTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.resetDefault">reset_default</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_default` <a name="reset_default" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.property.defaultInput">default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.group.GroupTimeouts">GroupTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.property.defaultInput"></a>

```python
default_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.group.GroupTimeouts">GroupTimeouts</a>]

---


### GroupUsersList <a name="GroupUsersList" id="@cdktf/provider-ionoscloud.group.GroupUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.group.GroupUsersList.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import group

group.GroupUsersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.group.GroupUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.group.GroupUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-ionoscloud.group.GroupUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-ionoscloud.group.GroupUsersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-ionoscloud.group.GroupUsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.group.GroupUsersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.group.GroupUsersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.group.GroupUsersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.group.GroupUsersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.group.GroupUsersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GroupUsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.group.GroupUsersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.group.GroupUsersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.group.GroupUsersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GroupUsersOutputReference <a name="GroupUsersOutputReference" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import group

group.GroupUsersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.property.administrator">administrator</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.property.firstName">first_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.property.forceSecAuth">force_sec_auth</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.property.lastName">last_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsers">GroupUsers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `administrator`<sup>Required</sup> <a name="administrator" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.property.administrator"></a>

```python
administrator: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

---

##### `force_sec_auth`<sup>Required</sup> <a name="force_sec_auth" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.property.forceSecAuth"></a>

```python
force_sec_auth: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.property.internalValue"></a>

```python
internal_value: GroupUsers
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.group.GroupUsers">GroupUsers</a>

---



