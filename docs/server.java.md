# `ionoscloud_server`

Refer to the Terraform Registory for docs: [`ionoscloud_server`](https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server).

# `server` Submodule <a name="`server` Submodule" id="@cdktf/provider-ionoscloud.server"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Server <a name="Server" id="@cdktf/provider-ionoscloud.server.Server"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server ionoscloud_server}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.server.Server.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.server.Server;

Server.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .datacenterId(java.lang.String)
    .name(java.lang.String)
    .volume(ServerVolume)
//  .availabilityZone(java.lang.String)
//  .bootCdrom(java.lang.String)
//  .bootImage(java.lang.String)
//  .cores(java.lang.Number)
//  .cpuFamily(java.lang.String)
//  .firewallruleIds(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .imageName(java.lang.String)
//  .imagePassword(java.lang.String)
//  .label(IResolvable)
//  .label(java.util.List<ServerLabel>)
//  .nic(ServerNic)
//  .ram(java.lang.Number)
//  .sshKeyPath(java.util.List<java.lang.String>)
//  .sshKeys(java.util.List<java.lang.String>)
//  .templateUuid(java.lang.String)
//  .timeouts(ServerTimeouts)
//  .type(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.datacenterId">datacenterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#datacenter_id Server#datacenter_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#name Server#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.volume">volume</a></code> | <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolume">ServerVolume</a></code> | volume block. |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#availability_zone Server#availability_zone}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.bootCdrom">bootCdrom</a></code> | <code>java.lang.String</code> | The associated boot drive, if any. |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.bootImage">bootImage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#boot_image Server#boot_image}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.cores">cores</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#cores Server#cores}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.cpuFamily">cpuFamily</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#cpu_family Server#cpu_family}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.firewallruleIds">firewallruleIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#firewallrule_ids Server#firewallrule_ids}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#id Server#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.imageName">imageName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#image_name Server#image_name}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.imagePassword">imagePassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#image_password Server#image_password}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.label">label</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ionoscloud.server.ServerLabel">ServerLabel</a>></code> | label block. |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.nic">nic</a></code> | <code><a href="#@cdktf/provider-ionoscloud.server.ServerNic">ServerNic</a></code> | nic block. |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.ram">ram</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#ram Server#ram}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.sshKeyPath">sshKeyPath</a></code> | <code>java.util.List<java.lang.String></code> | Immutable List of absolute or relative paths to files containing public SSH key that will be injected into IonosCloud provided Linux images. |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.sshKeys">sshKeys</a></code> | <code>java.util.List<java.lang.String></code> | Public SSH keys are set on the image as authorized keys for appropriate SSH login to the instance using the corresponding private key. |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.templateUuid">templateUuid</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#template_uuid Server#template_uuid}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeouts">ServerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | server usages: ENTERPRISE or CUBE. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.datacenterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#datacenter_id Server#datacenter_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#name Server#name}.

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.volume"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.server.ServerVolume">ServerVolume</a>

volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#volume Server#volume}

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.availabilityZone"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#availability_zone Server#availability_zone}.

---

##### `bootCdrom`<sup>Optional</sup> <a name="bootCdrom" id="@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.bootCdrom"></a>

- *Type:* java.lang.String

The associated boot drive, if any.

Must be the UUID of a bootable CDROM image that you can retrieve using the image data source

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#boot_cdrom Server#boot_cdrom}

---

##### `bootImage`<sup>Optional</sup> <a name="bootImage" id="@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.bootImage"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#boot_image Server#boot_image}.

---

##### `cores`<sup>Optional</sup> <a name="cores" id="@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.cores"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#cores Server#cores}.

---

##### `cpuFamily`<sup>Optional</sup> <a name="cpuFamily" id="@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.cpuFamily"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#cpu_family Server#cpu_family}.

---

##### `firewallruleIds`<sup>Optional</sup> <a name="firewallruleIds" id="@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.firewallruleIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#firewallrule_ids Server#firewallrule_ids}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#id Server#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imageName`<sup>Optional</sup> <a name="imageName" id="@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.imageName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#image_name Server#image_name}.

---

##### `imagePassword`<sup>Optional</sup> <a name="imagePassword" id="@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.imagePassword"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#image_password Server#image_password}.

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.label"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ionoscloud.server.ServerLabel">ServerLabel</a>>

label block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#label Server#label}

---

##### `nic`<sup>Optional</sup> <a name="nic" id="@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.nic"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.server.ServerNic">ServerNic</a>

nic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#nic Server#nic}

---

##### `ram`<sup>Optional</sup> <a name="ram" id="@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.ram"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#ram Server#ram}.

---

##### `sshKeyPath`<sup>Optional</sup> <a name="sshKeyPath" id="@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.sshKeyPath"></a>

- *Type:* java.util.List<java.lang.String>

Immutable List of absolute or relative paths to files containing public SSH key that will be injected into IonosCloud provided Linux images.

Does not support `~` expansion to homedir in the given path. Public SSH keys are set on the image as authorized keys for appropriate SSH login to the instance using the corresponding private key. This field may only be set in creation requests. When reading, it always returns null. SSH keys are only supported if a public Linux image is used for the volume creation. This property is immutable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#ssh_key_path Server#ssh_key_path}

---

##### `sshKeys`<sup>Optional</sup> <a name="sshKeys" id="@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.sshKeys"></a>

- *Type:* java.util.List<java.lang.String>

Public SSH keys are set on the image as authorized keys for appropriate SSH login to the instance using the corresponding private key.

This field may only be set in creation requests. When reading, it always returns null. SSH keys are only supported if a public Linux image is used for the volume creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#ssh_keys Server#ssh_keys}

---

##### `templateUuid`<sup>Optional</sup> <a name="templateUuid" id="@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.templateUuid"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#template_uuid Server#template_uuid}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.server.ServerTimeouts">ServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#timeouts Server#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-ionoscloud.server.Server.Initializer.parameter.type"></a>

- *Type:* java.lang.String

server usages: ENTERPRISE or CUBE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#type Server#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.putLabel">putLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.putNic">putNic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.putVolume">putVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.resetBootCdrom">resetBootCdrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.resetBootImage">resetBootImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.resetCores">resetCores</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.resetCpuFamily">resetCpuFamily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.resetFirewallruleIds">resetFirewallruleIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.resetImageName">resetImageName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.resetImagePassword">resetImagePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.resetLabel">resetLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.resetNic">resetNic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.resetRam">resetRam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.resetSshKeyPath">resetSshKeyPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.resetSshKeys">resetSshKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.resetTemplateUuid">resetTemplateUuid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.server.Server.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ionoscloud.server.Server.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.server.Server.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.server.Server.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ionoscloud.server.Server.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.server.Server.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ionoscloud.server.Server.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ionoscloud.server.Server.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ionoscloud.server.Server.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.server.Server.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.Server.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.server.Server.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.Server.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.server.Server.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.Server.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.server.Server.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.Server.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.server.Server.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.Server.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.server.Server.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.Server.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.server.Server.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.Server.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.server.Server.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.Server.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.server.Server.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.Server.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.server.Server.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.Server.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putLabel` <a name="putLabel" id="@cdktf/provider-ionoscloud.server.Server.putLabel"></a>

```java
public void putLabel(IResolvable OR java.util.List<ServerLabel> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.server.Server.putLabel.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ionoscloud.server.ServerLabel">ServerLabel</a>>

---

##### `putNic` <a name="putNic" id="@cdktf/provider-ionoscloud.server.Server.putNic"></a>

```java
public void putNic(ServerNic value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.server.Server.putNic.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.server.ServerNic">ServerNic</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-ionoscloud.server.Server.putTimeouts"></a>

```java
public void putTimeouts(ServerTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.server.Server.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.server.ServerTimeouts">ServerTimeouts</a>

---

##### `putVolume` <a name="putVolume" id="@cdktf/provider-ionoscloud.server.Server.putVolume"></a>

```java
public void putVolume(ServerVolume value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.server.Server.putVolume.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.server.ServerVolume">ServerVolume</a>

---

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktf/provider-ionoscloud.server.Server.resetAvailabilityZone"></a>

```java
public void resetAvailabilityZone()
```

##### `resetBootCdrom` <a name="resetBootCdrom" id="@cdktf/provider-ionoscloud.server.Server.resetBootCdrom"></a>

```java
public void resetBootCdrom()
```

##### `resetBootImage` <a name="resetBootImage" id="@cdktf/provider-ionoscloud.server.Server.resetBootImage"></a>

```java
public void resetBootImage()
```

##### `resetCores` <a name="resetCores" id="@cdktf/provider-ionoscloud.server.Server.resetCores"></a>

```java
public void resetCores()
```

##### `resetCpuFamily` <a name="resetCpuFamily" id="@cdktf/provider-ionoscloud.server.Server.resetCpuFamily"></a>

```java
public void resetCpuFamily()
```

##### `resetFirewallruleIds` <a name="resetFirewallruleIds" id="@cdktf/provider-ionoscloud.server.Server.resetFirewallruleIds"></a>

```java
public void resetFirewallruleIds()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-ionoscloud.server.Server.resetId"></a>

```java
public void resetId()
```

##### `resetImageName` <a name="resetImageName" id="@cdktf/provider-ionoscloud.server.Server.resetImageName"></a>

```java
public void resetImageName()
```

##### `resetImagePassword` <a name="resetImagePassword" id="@cdktf/provider-ionoscloud.server.Server.resetImagePassword"></a>

```java
public void resetImagePassword()
```

##### `resetLabel` <a name="resetLabel" id="@cdktf/provider-ionoscloud.server.Server.resetLabel"></a>

```java
public void resetLabel()
```

##### `resetNic` <a name="resetNic" id="@cdktf/provider-ionoscloud.server.Server.resetNic"></a>

```java
public void resetNic()
```

##### `resetRam` <a name="resetRam" id="@cdktf/provider-ionoscloud.server.Server.resetRam"></a>

```java
public void resetRam()
```

##### `resetSshKeyPath` <a name="resetSshKeyPath" id="@cdktf/provider-ionoscloud.server.Server.resetSshKeyPath"></a>

```java
public void resetSshKeyPath()
```

##### `resetSshKeys` <a name="resetSshKeys" id="@cdktf/provider-ionoscloud.server.Server.resetSshKeys"></a>

```java
public void resetSshKeys()
```

##### `resetTemplateUuid` <a name="resetTemplateUuid" id="@cdktf/provider-ionoscloud.server.Server.resetTemplateUuid"></a>

```java
public void resetTemplateUuid()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-ionoscloud.server.Server.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-ionoscloud.server.Server.resetType"></a>

```java
public void resetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ionoscloud.server.Server.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.server.Server;

Server.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.server.Server.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-ionoscloud.server.Server.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.server.Server;

Server.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.server.Server.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-ionoscloud.server.Server.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.server.Server;

Server.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.server.Server.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.bootVolume">bootVolume</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.firewallruleId">firewallruleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.inlineVolumeIds">inlineVolumeIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.label">label</a></code> | <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelList">ServerLabelList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.nic">nic</a></code> | <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference">ServerNicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.primaryIp">primaryIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.primaryNic">primaryNic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference">ServerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.volume">volume</a></code> | <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference">ServerVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.bootCdromInput">bootCdromInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.bootImageInput">bootImageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.coresInput">coresInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.cpuFamilyInput">cpuFamilyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.datacenterIdInput">datacenterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.firewallruleIdsInput">firewallruleIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.imageNameInput">imageNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.imagePasswordInput">imagePasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.labelInput">labelInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ionoscloud.server.ServerLabel">ServerLabel</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.nicInput">nicInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.server.ServerNic">ServerNic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.ramInput">ramInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.sshKeyPathInput">sshKeyPathInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.sshKeysInput">sshKeysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.templateUuidInput">templateUuidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.server.ServerTimeouts">ServerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.volumeInput">volumeInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolume">ServerVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.bootCdrom">bootCdrom</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.bootImage">bootImage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.cores">cores</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.cpuFamily">cpuFamily</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.datacenterId">datacenterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.firewallruleIds">firewallruleIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.imageName">imageName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.imagePassword">imagePassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.ram">ram</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.sshKeyPath">sshKeyPath</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.sshKeys">sshKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.templateUuid">templateUuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.server.Server.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ionoscloud.server.Server.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.server.Server.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ionoscloud.server.Server.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ionoscloud.server.Server.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ionoscloud.server.Server.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.server.Server.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.server.Server.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.server.Server.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.server.Server.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.server.Server.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.server.Server.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.server.Server.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.server.Server.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bootVolume`<sup>Required</sup> <a name="bootVolume" id="@cdktf/provider-ionoscloud.server.Server.property.bootVolume"></a>

```java
public java.lang.String getBootVolume();
```

- *Type:* java.lang.String

---

##### `firewallruleId`<sup>Required</sup> <a name="firewallruleId" id="@cdktf/provider-ionoscloud.server.Server.property.firewallruleId"></a>

```java
public java.lang.String getFirewallruleId();
```

- *Type:* java.lang.String

---

##### `inlineVolumeIds`<sup>Required</sup> <a name="inlineVolumeIds" id="@cdktf/provider-ionoscloud.server.Server.property.inlineVolumeIds"></a>

```java
public java.util.List<java.lang.String> getInlineVolumeIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-ionoscloud.server.Server.property.label"></a>

```java
public ServerLabelList getLabel();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.server.ServerLabelList">ServerLabelList</a>

---

##### `nic`<sup>Required</sup> <a name="nic" id="@cdktf/provider-ionoscloud.server.Server.property.nic"></a>

```java
public ServerNicOutputReference getNic();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference">ServerNicOutputReference</a>

---

##### `primaryIp`<sup>Required</sup> <a name="primaryIp" id="@cdktf/provider-ionoscloud.server.Server.property.primaryIp"></a>

```java
public java.lang.String getPrimaryIp();
```

- *Type:* java.lang.String

---

##### `primaryNic`<sup>Required</sup> <a name="primaryNic" id="@cdktf/provider-ionoscloud.server.Server.property.primaryNic"></a>

```java
public java.lang.String getPrimaryNic();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.server.Server.property.timeouts"></a>

```java
public ServerTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference">ServerTimeoutsOutputReference</a>

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-ionoscloud.server.Server.property.volume"></a>

```java
public ServerVolumeOutputReference getVolume();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference">ServerVolumeOutputReference</a>

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktf/provider-ionoscloud.server.Server.property.availabilityZoneInput"></a>

```java
public java.lang.String getAvailabilityZoneInput();
```

- *Type:* java.lang.String

---

##### `bootCdromInput`<sup>Optional</sup> <a name="bootCdromInput" id="@cdktf/provider-ionoscloud.server.Server.property.bootCdromInput"></a>

```java
public java.lang.String getBootCdromInput();
```

- *Type:* java.lang.String

---

##### `bootImageInput`<sup>Optional</sup> <a name="bootImageInput" id="@cdktf/provider-ionoscloud.server.Server.property.bootImageInput"></a>

```java
public java.lang.String getBootImageInput();
```

- *Type:* java.lang.String

---

##### `coresInput`<sup>Optional</sup> <a name="coresInput" id="@cdktf/provider-ionoscloud.server.Server.property.coresInput"></a>

```java
public java.lang.Number getCoresInput();
```

- *Type:* java.lang.Number

---

##### `cpuFamilyInput`<sup>Optional</sup> <a name="cpuFamilyInput" id="@cdktf/provider-ionoscloud.server.Server.property.cpuFamilyInput"></a>

```java
public java.lang.String getCpuFamilyInput();
```

- *Type:* java.lang.String

---

##### `datacenterIdInput`<sup>Optional</sup> <a name="datacenterIdInput" id="@cdktf/provider-ionoscloud.server.Server.property.datacenterIdInput"></a>

```java
public java.lang.String getDatacenterIdInput();
```

- *Type:* java.lang.String

---

##### `firewallruleIdsInput`<sup>Optional</sup> <a name="firewallruleIdsInput" id="@cdktf/provider-ionoscloud.server.Server.property.firewallruleIdsInput"></a>

```java
public java.util.List<java.lang.String> getFirewallruleIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-ionoscloud.server.Server.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `imageNameInput`<sup>Optional</sup> <a name="imageNameInput" id="@cdktf/provider-ionoscloud.server.Server.property.imageNameInput"></a>

```java
public java.lang.String getImageNameInput();
```

- *Type:* java.lang.String

---

##### `imagePasswordInput`<sup>Optional</sup> <a name="imagePasswordInput" id="@cdktf/provider-ionoscloud.server.Server.property.imagePasswordInput"></a>

```java
public java.lang.String getImagePasswordInput();
```

- *Type:* java.lang.String

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-ionoscloud.server.Server.property.labelInput"></a>

```java
public java.lang.Object getLabelInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ionoscloud.server.ServerLabel">ServerLabel</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-ionoscloud.server.Server.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nicInput`<sup>Optional</sup> <a name="nicInput" id="@cdktf/provider-ionoscloud.server.Server.property.nicInput"></a>

```java
public ServerNic getNicInput();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.server.ServerNic">ServerNic</a>

---

##### `ramInput`<sup>Optional</sup> <a name="ramInput" id="@cdktf/provider-ionoscloud.server.Server.property.ramInput"></a>

```java
public java.lang.Number getRamInput();
```

- *Type:* java.lang.Number

---

##### `sshKeyPathInput`<sup>Optional</sup> <a name="sshKeyPathInput" id="@cdktf/provider-ionoscloud.server.Server.property.sshKeyPathInput"></a>

```java
public java.util.List<java.lang.String> getSshKeyPathInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sshKeysInput`<sup>Optional</sup> <a name="sshKeysInput" id="@cdktf/provider-ionoscloud.server.Server.property.sshKeysInput"></a>

```java
public java.util.List<java.lang.String> getSshKeysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `templateUuidInput`<sup>Optional</sup> <a name="templateUuidInput" id="@cdktf/provider-ionoscloud.server.Server.property.templateUuidInput"></a>

```java
public java.lang.String getTemplateUuidInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-ionoscloud.server.Server.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.server.ServerTimeouts">ServerTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-ionoscloud.server.Server.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `volumeInput`<sup>Optional</sup> <a name="volumeInput" id="@cdktf/provider-ionoscloud.server.Server.property.volumeInput"></a>

```java
public ServerVolume getVolumeInput();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.server.ServerVolume">ServerVolume</a>

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-ionoscloud.server.Server.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `bootCdrom`<sup>Required</sup> <a name="bootCdrom" id="@cdktf/provider-ionoscloud.server.Server.property.bootCdrom"></a>

```java
public java.lang.String getBootCdrom();
```

- *Type:* java.lang.String

---

##### `bootImage`<sup>Required</sup> <a name="bootImage" id="@cdktf/provider-ionoscloud.server.Server.property.bootImage"></a>

```java
public java.lang.String getBootImage();
```

- *Type:* java.lang.String

---

##### `cores`<sup>Required</sup> <a name="cores" id="@cdktf/provider-ionoscloud.server.Server.property.cores"></a>

```java
public java.lang.Number getCores();
```

- *Type:* java.lang.Number

---

##### `cpuFamily`<sup>Required</sup> <a name="cpuFamily" id="@cdktf/provider-ionoscloud.server.Server.property.cpuFamily"></a>

```java
public java.lang.String getCpuFamily();
```

- *Type:* java.lang.String

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-ionoscloud.server.Server.property.datacenterId"></a>

```java
public java.lang.String getDatacenterId();
```

- *Type:* java.lang.String

---

##### `firewallruleIds`<sup>Required</sup> <a name="firewallruleIds" id="@cdktf/provider-ionoscloud.server.Server.property.firewallruleIds"></a>

```java
public java.util.List<java.lang.String> getFirewallruleIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.server.Server.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdktf/provider-ionoscloud.server.Server.property.imageName"></a>

```java
public java.lang.String getImageName();
```

- *Type:* java.lang.String

---

##### `imagePassword`<sup>Required</sup> <a name="imagePassword" id="@cdktf/provider-ionoscloud.server.Server.property.imagePassword"></a>

```java
public java.lang.String getImagePassword();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.server.Server.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `ram`<sup>Required</sup> <a name="ram" id="@cdktf/provider-ionoscloud.server.Server.property.ram"></a>

```java
public java.lang.Number getRam();
```

- *Type:* java.lang.Number

---

##### `sshKeyPath`<sup>Required</sup> <a name="sshKeyPath" id="@cdktf/provider-ionoscloud.server.Server.property.sshKeyPath"></a>

```java
public java.util.List<java.lang.String> getSshKeyPath();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sshKeys`<sup>Required</sup> <a name="sshKeys" id="@cdktf/provider-ionoscloud.server.Server.property.sshKeys"></a>

```java
public java.util.List<java.lang.String> getSshKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `templateUuid`<sup>Required</sup> <a name="templateUuid" id="@cdktf/provider-ionoscloud.server.Server.property.templateUuid"></a>

```java
public java.lang.String getTemplateUuid();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-ionoscloud.server.Server.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.Server.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.server.Server.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ServerConfig <a name="ServerConfig" id="@cdktf/provider-ionoscloud.server.ServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.server.ServerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.server.ServerConfig;

ServerConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .datacenterId(java.lang.String)
    .name(java.lang.String)
    .volume(ServerVolume)
//  .availabilityZone(java.lang.String)
//  .bootCdrom(java.lang.String)
//  .bootImage(java.lang.String)
//  .cores(java.lang.Number)
//  .cpuFamily(java.lang.String)
//  .firewallruleIds(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .imageName(java.lang.String)
//  .imagePassword(java.lang.String)
//  .label(IResolvable)
//  .label(java.util.List<ServerLabel>)
//  .nic(ServerNic)
//  .ram(java.lang.Number)
//  .sshKeyPath(java.util.List<java.lang.String>)
//  .sshKeys(java.util.List<java.lang.String>)
//  .templateUuid(java.lang.String)
//  .timeouts(ServerTimeouts)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.datacenterId">datacenterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#datacenter_id Server#datacenter_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#name Server#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.volume">volume</a></code> | <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolume">ServerVolume</a></code> | volume block. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#availability_zone Server#availability_zone}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.bootCdrom">bootCdrom</a></code> | <code>java.lang.String</code> | The associated boot drive, if any. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.bootImage">bootImage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#boot_image Server#boot_image}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.cores">cores</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#cores Server#cores}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.cpuFamily">cpuFamily</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#cpu_family Server#cpu_family}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.firewallruleIds">firewallruleIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#firewallrule_ids Server#firewallrule_ids}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#id Server#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.imageName">imageName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#image_name Server#image_name}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.imagePassword">imagePassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#image_password Server#image_password}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.label">label</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ionoscloud.server.ServerLabel">ServerLabel</a>></code> | label block. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.nic">nic</a></code> | <code><a href="#@cdktf/provider-ionoscloud.server.ServerNic">ServerNic</a></code> | nic block. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.ram">ram</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#ram Server#ram}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.sshKeyPath">sshKeyPath</a></code> | <code>java.util.List<java.lang.String></code> | Immutable List of absolute or relative paths to files containing public SSH key that will be injected into IonosCloud provided Linux images. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.sshKeys">sshKeys</a></code> | <code>java.util.List<java.lang.String></code> | Public SSH keys are set on the image as authorized keys for appropriate SSH login to the instance using the corresponding private key. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.templateUuid">templateUuid</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#template_uuid Server#template_uuid}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeouts">ServerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerConfig.property.type">type</a></code> | <code>java.lang.String</code> | server usages: ENTERPRISE or CUBE. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.datacenterId"></a>

```java
public java.lang.String getDatacenterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#datacenter_id Server#datacenter_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#name Server#name}.

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.volume"></a>

```java
public ServerVolume getVolume();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.server.ServerVolume">ServerVolume</a>

volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#volume Server#volume}

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#availability_zone Server#availability_zone}.

---

##### `bootCdrom`<sup>Optional</sup> <a name="bootCdrom" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.bootCdrom"></a>

```java
public java.lang.String getBootCdrom();
```

- *Type:* java.lang.String

The associated boot drive, if any.

Must be the UUID of a bootable CDROM image that you can retrieve using the image data source

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#boot_cdrom Server#boot_cdrom}

---

##### `bootImage`<sup>Optional</sup> <a name="bootImage" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.bootImage"></a>

```java
public java.lang.String getBootImage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#boot_image Server#boot_image}.

---

##### `cores`<sup>Optional</sup> <a name="cores" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.cores"></a>

```java
public java.lang.Number getCores();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#cores Server#cores}.

---

##### `cpuFamily`<sup>Optional</sup> <a name="cpuFamily" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.cpuFamily"></a>

```java
public java.lang.String getCpuFamily();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#cpu_family Server#cpu_family}.

---

##### `firewallruleIds`<sup>Optional</sup> <a name="firewallruleIds" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.firewallruleIds"></a>

```java
public java.util.List<java.lang.String> getFirewallruleIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#firewallrule_ids Server#firewallrule_ids}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#id Server#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imageName`<sup>Optional</sup> <a name="imageName" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.imageName"></a>

```java
public java.lang.String getImageName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#image_name Server#image_name}.

---

##### `imagePassword`<sup>Optional</sup> <a name="imagePassword" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.imagePassword"></a>

```java
public java.lang.String getImagePassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#image_password Server#image_password}.

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.label"></a>

```java
public java.lang.Object getLabel();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ionoscloud.server.ServerLabel">ServerLabel</a>>

label block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#label Server#label}

---

##### `nic`<sup>Optional</sup> <a name="nic" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.nic"></a>

```java
public ServerNic getNic();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.server.ServerNic">ServerNic</a>

nic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#nic Server#nic}

---

##### `ram`<sup>Optional</sup> <a name="ram" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.ram"></a>

```java
public java.lang.Number getRam();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#ram Server#ram}.

---

##### `sshKeyPath`<sup>Optional</sup> <a name="sshKeyPath" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.sshKeyPath"></a>

```java
public java.util.List<java.lang.String> getSshKeyPath();
```

- *Type:* java.util.List<java.lang.String>

Immutable List of absolute or relative paths to files containing public SSH key that will be injected into IonosCloud provided Linux images.

Does not support `~` expansion to homedir in the given path. Public SSH keys are set on the image as authorized keys for appropriate SSH login to the instance using the corresponding private key. This field may only be set in creation requests. When reading, it always returns null. SSH keys are only supported if a public Linux image is used for the volume creation. This property is immutable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#ssh_key_path Server#ssh_key_path}

---

##### `sshKeys`<sup>Optional</sup> <a name="sshKeys" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.sshKeys"></a>

```java
public java.util.List<java.lang.String> getSshKeys();
```

- *Type:* java.util.List<java.lang.String>

Public SSH keys are set on the image as authorized keys for appropriate SSH login to the instance using the corresponding private key.

This field may only be set in creation requests. When reading, it always returns null. SSH keys are only supported if a public Linux image is used for the volume creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#ssh_keys Server#ssh_keys}

---

##### `templateUuid`<sup>Optional</sup> <a name="templateUuid" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.templateUuid"></a>

```java
public java.lang.String getTemplateUuid();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#template_uuid Server#template_uuid}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.timeouts"></a>

```java
public ServerTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.server.ServerTimeouts">ServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#timeouts Server#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-ionoscloud.server.ServerConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

server usages: ENTERPRISE or CUBE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#type Server#type}

---

### ServerLabel <a name="ServerLabel" id="@cdktf/provider-ionoscloud.server.ServerLabel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.server.ServerLabel.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.server.ServerLabel;

ServerLabel.builder()
    .key(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabel.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#key Server#key}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabel.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#value Server#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-ionoscloud.server.ServerLabel.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#key Server#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.server.ServerLabel.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#value Server#value}.

---

### ServerNic <a name="ServerNic" id="@cdktf/provider-ionoscloud.server.ServerNic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.server.ServerNic.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.server.ServerNic;

ServerNic.builder()
    .lan(java.lang.Number)
//  .dhcp(java.lang.Boolean)
//  .dhcp(IResolvable)
//  .dhcpv6(java.lang.Boolean)
//  .dhcpv6(IResolvable)
//  .firewall(IResolvable)
//  .firewall(java.util.List<ServerNicFirewall>)
//  .firewallActive(java.lang.Boolean)
//  .firewallActive(IResolvable)
//  .firewallType(java.lang.String)
//  .ips(java.util.List<java.lang.String>)
//  .ipv6CidrBlock(java.lang.String)
//  .ipv6Ips(java.util.List<java.lang.String>)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNic.property.lan">lan</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#lan Server#lan}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNic.property.dhcp">dhcp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#dhcp Server#dhcp}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNic.property.dhcpv6">dhcpv6</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates whether this NIC receives an IPv6 address through DHCP. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNic.property.firewall">firewall</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewall">ServerNicFirewall</a>></code> | firewall block. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNic.property.firewallActive">firewallActive</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#firewall_active Server#firewall_active}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNic.property.firewallType">firewallType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#firewall_type Server#firewall_type}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNic.property.ips">ips</a></code> | <code>java.util.List<java.lang.String></code> | Collection of IP addresses assigned to a nic. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNic.property.ipv6CidrBlock">ipv6CidrBlock</a></code> | <code>java.lang.String</code> | IPv6 CIDR block assigned to the NIC. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNic.property.ipv6Ips">ipv6Ips</a></code> | <code>java.util.List<java.lang.String></code> | Collection for IPv6 addresses assigned to a nic. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNic.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#name Server#name}. |

---

##### `lan`<sup>Required</sup> <a name="lan" id="@cdktf/provider-ionoscloud.server.ServerNic.property.lan"></a>

```java
public java.lang.Number getLan();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#lan Server#lan}.

---

##### `dhcp`<sup>Optional</sup> <a name="dhcp" id="@cdktf/provider-ionoscloud.server.ServerNic.property.dhcp"></a>

```java
public java.lang.Object getDhcp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#dhcp Server#dhcp}.

---

##### `dhcpv6`<sup>Optional</sup> <a name="dhcpv6" id="@cdktf/provider-ionoscloud.server.ServerNic.property.dhcpv6"></a>

```java
public java.lang.Object getDhcpv6();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates whether this NIC receives an IPv6 address through DHCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#dhcpv6 Server#dhcpv6}

---

##### `firewall`<sup>Optional</sup> <a name="firewall" id="@cdktf/provider-ionoscloud.server.ServerNic.property.firewall"></a>

```java
public java.lang.Object getFirewall();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewall">ServerNicFirewall</a>>

firewall block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#firewall Server#firewall}

---

##### `firewallActive`<sup>Optional</sup> <a name="firewallActive" id="@cdktf/provider-ionoscloud.server.ServerNic.property.firewallActive"></a>

```java
public java.lang.Object getFirewallActive();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#firewall_active Server#firewall_active}.

---

##### `firewallType`<sup>Optional</sup> <a name="firewallType" id="@cdktf/provider-ionoscloud.server.ServerNic.property.firewallType"></a>

```java
public java.lang.String getFirewallType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#firewall_type Server#firewall_type}.

---

##### `ips`<sup>Optional</sup> <a name="ips" id="@cdktf/provider-ionoscloud.server.ServerNic.property.ips"></a>

```java
public java.util.List<java.lang.String> getIps();
```

- *Type:* java.util.List<java.lang.String>

Collection of IP addresses assigned to a nic.

Explicitly assigned public IPs need to come from reserved IP blocks, Passing value null or empty array will assign an IP address automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#ips Server#ips}

---

##### `ipv6CidrBlock`<sup>Optional</sup> <a name="ipv6CidrBlock" id="@cdktf/provider-ionoscloud.server.ServerNic.property.ipv6CidrBlock"></a>

```java
public java.lang.String getIpv6CidrBlock();
```

- *Type:* java.lang.String

IPv6 CIDR block assigned to the NIC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#ipv6_cidr_block Server#ipv6_cidr_block}

---

##### `ipv6Ips`<sup>Optional</sup> <a name="ipv6Ips" id="@cdktf/provider-ionoscloud.server.ServerNic.property.ipv6Ips"></a>

```java
public java.util.List<java.lang.String> getIpv6Ips();
```

- *Type:* java.util.List<java.lang.String>

Collection for IPv6 addresses assigned to a nic.

Explicitly assigned IPv6 addresses need to come from inside the IPv6 CIDR block assigned to the nic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#ipv6_ips Server#ipv6_ips}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-ionoscloud.server.ServerNic.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#name Server#name}.

---

### ServerNicFirewall <a name="ServerNicFirewall" id="@cdktf/provider-ionoscloud.server.ServerNicFirewall"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.server.ServerNicFirewall.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.server.ServerNicFirewall;

ServerNicFirewall.builder()
    .protocol(java.lang.String)
//  .icmpCode(java.lang.String)
//  .icmpType(java.lang.String)
//  .name(java.lang.String)
//  .portRangeEnd(java.lang.Number)
//  .portRangeStart(java.lang.Number)
//  .sourceIp(java.lang.String)
//  .sourceMac(java.lang.String)
//  .targetIp(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewall.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#protocol Server#protocol}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewall.property.icmpCode">icmpCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#icmp_code Server#icmp_code}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewall.property.icmpType">icmpType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#icmp_type Server#icmp_type}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewall.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#name Server#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewall.property.portRangeEnd">portRangeEnd</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#port_range_end Server#port_range_end}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewall.property.portRangeStart">portRangeStart</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#port_range_start Server#port_range_start}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewall.property.sourceIp">sourceIp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#source_ip Server#source_ip}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewall.property.sourceMac">sourceMac</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#source_mac Server#source_mac}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewall.property.targetIp">targetIp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#target_ip Server#target_ip}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewall.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#type Server#type}. |

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-ionoscloud.server.ServerNicFirewall.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#protocol Server#protocol}.

---

##### `icmpCode`<sup>Optional</sup> <a name="icmpCode" id="@cdktf/provider-ionoscloud.server.ServerNicFirewall.property.icmpCode"></a>

```java
public java.lang.String getIcmpCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#icmp_code Server#icmp_code}.

---

##### `icmpType`<sup>Optional</sup> <a name="icmpType" id="@cdktf/provider-ionoscloud.server.ServerNicFirewall.property.icmpType"></a>

```java
public java.lang.String getIcmpType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#icmp_type Server#icmp_type}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-ionoscloud.server.ServerNicFirewall.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#name Server#name}.

---

##### `portRangeEnd`<sup>Optional</sup> <a name="portRangeEnd" id="@cdktf/provider-ionoscloud.server.ServerNicFirewall.property.portRangeEnd"></a>

```java
public java.lang.Number getPortRangeEnd();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#port_range_end Server#port_range_end}.

---

##### `portRangeStart`<sup>Optional</sup> <a name="portRangeStart" id="@cdktf/provider-ionoscloud.server.ServerNicFirewall.property.portRangeStart"></a>

```java
public java.lang.Number getPortRangeStart();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#port_range_start Server#port_range_start}.

---

##### `sourceIp`<sup>Optional</sup> <a name="sourceIp" id="@cdktf/provider-ionoscloud.server.ServerNicFirewall.property.sourceIp"></a>

```java
public java.lang.String getSourceIp();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#source_ip Server#source_ip}.

---

##### `sourceMac`<sup>Optional</sup> <a name="sourceMac" id="@cdktf/provider-ionoscloud.server.ServerNicFirewall.property.sourceMac"></a>

```java
public java.lang.String getSourceMac();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#source_mac Server#source_mac}.

---

##### `targetIp`<sup>Optional</sup> <a name="targetIp" id="@cdktf/provider-ionoscloud.server.ServerNicFirewall.property.targetIp"></a>

```java
public java.lang.String getTargetIp();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#target_ip Server#target_ip}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-ionoscloud.server.ServerNicFirewall.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#type Server#type}.

---

### ServerTimeouts <a name="ServerTimeouts" id="@cdktf/provider-ionoscloud.server.ServerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.server.ServerTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.server.ServerTimeouts;

ServerTimeouts.builder()
//  .create(java.lang.String)
//  .default(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#create Server#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeouts.property.default">default</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#default Server#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#delete Server#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#update Server#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.server.ServerTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#create Server#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.server.ServerTimeouts.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#default Server#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.server.ServerTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#delete Server#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.server.ServerTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#update Server#update}.

---

### ServerVolume <a name="ServerVolume" id="@cdktf/provider-ionoscloud.server.ServerVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.server.ServerVolume.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.server.ServerVolume;

ServerVolume.builder()
    .diskType(java.lang.String)
//  .availabilityZone(java.lang.String)
//  .backupUnitId(java.lang.String)
//  .bus(java.lang.String)
//  .imagePassword(java.lang.String)
//  .licenceType(java.lang.String)
//  .name(java.lang.String)
//  .size(java.lang.Number)
//  .sshKeyPath(java.util.List<java.lang.String>)
//  .sshKeys(java.util.List<java.lang.String>)
//  .userData(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolume.property.diskType">diskType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#disk_type Server#disk_type}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolume.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#availability_zone Server#availability_zone}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolume.property.backupUnitId">backupUnitId</a></code> | <code>java.lang.String</code> | The uuid of the Backup Unit that user has access to. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolume.property.bus">bus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#bus Server#bus}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolume.property.imagePassword">imagePassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#image_password Server#image_password}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolume.property.licenceType">licenceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#licence_type Server#licence_type}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolume.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#name Server#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolume.property.size">size</a></code> | <code>java.lang.Number</code> | The size of the volume in GB. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolume.property.sshKeyPath">sshKeyPath</a></code> | <code>java.util.List<java.lang.String></code> | Public SSH keys are set on the image as authorized keys for appropriate SSH login to the instance using the corresponding private key. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolume.property.sshKeys">sshKeys</a></code> | <code>java.util.List<java.lang.String></code> | Public SSH keys are set on the image as authorized keys for appropriate SSH login to the instance using the corresponding private key. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolume.property.userData">userData</a></code> | <code>java.lang.String</code> | The cloud-init configuration for the volume as base64 encoded string. |

---

##### `diskType`<sup>Required</sup> <a name="diskType" id="@cdktf/provider-ionoscloud.server.ServerVolume.property.diskType"></a>

```java
public java.lang.String getDiskType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#disk_type Server#disk_type}.

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktf/provider-ionoscloud.server.ServerVolume.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#availability_zone Server#availability_zone}.

---

##### `backupUnitId`<sup>Optional</sup> <a name="backupUnitId" id="@cdktf/provider-ionoscloud.server.ServerVolume.property.backupUnitId"></a>

```java
public java.lang.String getBackupUnitId();
```

- *Type:* java.lang.String

The uuid of the Backup Unit that user has access to.

The property is immutable and is only allowed to be set on a new volume creation. It is mandatory to provide either 'public image' or 'imageAlias' in conjunction with this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#backup_unit_id Server#backup_unit_id}

---

##### `bus`<sup>Optional</sup> <a name="bus" id="@cdktf/provider-ionoscloud.server.ServerVolume.property.bus"></a>

```java
public java.lang.String getBus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#bus Server#bus}.

---

##### `imagePassword`<sup>Optional</sup> <a name="imagePassword" id="@cdktf/provider-ionoscloud.server.ServerVolume.property.imagePassword"></a>

```java
public java.lang.String getImagePassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#image_password Server#image_password}.

---

##### `licenceType`<sup>Optional</sup> <a name="licenceType" id="@cdktf/provider-ionoscloud.server.ServerVolume.property.licenceType"></a>

```java
public java.lang.String getLicenceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#licence_type Server#licence_type}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-ionoscloud.server.ServerVolume.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#name Server#name}.

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-ionoscloud.server.ServerVolume.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

The size of the volume in GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#size Server#size}

---

##### `sshKeyPath`<sup>Optional</sup> <a name="sshKeyPath" id="@cdktf/provider-ionoscloud.server.ServerVolume.property.sshKeyPath"></a>

```java
public java.util.List<java.lang.String> getSshKeyPath();
```

- *Type:* java.util.List<java.lang.String>

Public SSH keys are set on the image as authorized keys for appropriate SSH login to the instance using the corresponding private key.

This field may only be set in creation requests. When reading, it always returns null. SSH keys are only supported if a public Linux image is used for the volume creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#ssh_key_path Server#ssh_key_path}

---

##### `sshKeys`<sup>Optional</sup> <a name="sshKeys" id="@cdktf/provider-ionoscloud.server.ServerVolume.property.sshKeys"></a>

```java
public java.util.List<java.lang.String> getSshKeys();
```

- *Type:* java.util.List<java.lang.String>

Public SSH keys are set on the image as authorized keys for appropriate SSH login to the instance using the corresponding private key.

This field may only be set in creation requests. When reading, it always returns null. SSH keys are only supported if a public Linux image is used for the volume creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#ssh_keys Server#ssh_keys}

---

##### `userData`<sup>Optional</sup> <a name="userData" id="@cdktf/provider-ionoscloud.server.ServerVolume.property.userData"></a>

```java
public java.lang.String getUserData();
```

- *Type:* java.lang.String

The cloud-init configuration for the volume as base64 encoded string.

The property is immutable and is only allowed to be set on a new volume creation. It is mandatory to provide either 'public image' or 'imageAlias' that has cloud-init compatibility in conjunction with this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/server#user_data Server#user_data}

---

## Classes <a name="Classes" id="Classes"></a>

### ServerLabelList <a name="ServerLabelList" id="@cdktf/provider-ionoscloud.server.ServerLabelList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.server.ServerLabelList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.server.ServerLabelList;

new ServerLabelList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.server.ServerLabelList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerLabelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.server.ServerLabelList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.server.ServerLabelList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.server.ServerLabelList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.server.ServerLabelList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.server.ServerLabelList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.server.ServerLabelList.get"></a>

```java
public ServerLabelOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.server.ServerLabelList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ionoscloud.server.ServerLabel">ServerLabel</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.server.ServerLabelList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.server.ServerLabelList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.server.ServerLabelList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ionoscloud.server.ServerLabel">ServerLabel</a>>

---


### ServerLabelOutputReference <a name="ServerLabelOutputReference" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.server.ServerLabelOutputReference;

new ServerLabelOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.server.ServerLabel">ServerLabel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.server.ServerLabelOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.server.ServerLabel">ServerLabel</a>

---


### ServerNicFirewallList <a name="ServerNicFirewallList" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.server.ServerNicFirewallList;

new ServerNicFirewallList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallList.get"></a>

```java
public ServerNicFirewallOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewall">ServerNicFirewall</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewall">ServerNicFirewall</a>>

---


### ServerNicFirewallOutputReference <a name="ServerNicFirewallOutputReference" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.server.ServerNicFirewallOutputReference;

new ServerNicFirewallOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.resetIcmpCode">resetIcmpCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.resetIcmpType">resetIcmpType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.resetPortRangeEnd">resetPortRangeEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.resetPortRangeStart">resetPortRangeStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.resetSourceIp">resetSourceIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.resetSourceMac">resetSourceMac</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.resetTargetIp">resetTargetIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIcmpCode` <a name="resetIcmpCode" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.resetIcmpCode"></a>

```java
public void resetIcmpCode()
```

##### `resetIcmpType` <a name="resetIcmpType" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.resetIcmpType"></a>

```java
public void resetIcmpType()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetPortRangeEnd` <a name="resetPortRangeEnd" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.resetPortRangeEnd"></a>

```java
public void resetPortRangeEnd()
```

##### `resetPortRangeStart` <a name="resetPortRangeStart" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.resetPortRangeStart"></a>

```java
public void resetPortRangeStart()
```

##### `resetSourceIp` <a name="resetSourceIp" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.resetSourceIp"></a>

```java
public void resetSourceIp()
```

##### `resetSourceMac` <a name="resetSourceMac" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.resetSourceMac"></a>

```java
public void resetSourceMac()
```

##### `resetTargetIp` <a name="resetTargetIp" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.resetTargetIp"></a>

```java
public void resetTargetIp()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.icmpCodeInput">icmpCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.icmpTypeInput">icmpTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.portRangeEndInput">portRangeEndInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.portRangeStartInput">portRangeStartInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.sourceIpInput">sourceIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.sourceMacInput">sourceMacInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.targetIpInput">targetIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.icmpCode">icmpCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.icmpType">icmpType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.portRangeEnd">portRangeEnd</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.portRangeStart">portRangeStart</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.sourceIp">sourceIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.sourceMac">sourceMac</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.targetIp">targetIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewall">ServerNicFirewall</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `icmpCodeInput`<sup>Optional</sup> <a name="icmpCodeInput" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.icmpCodeInput"></a>

```java
public java.lang.String getIcmpCodeInput();
```

- *Type:* java.lang.String

---

##### `icmpTypeInput`<sup>Optional</sup> <a name="icmpTypeInput" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.icmpTypeInput"></a>

```java
public java.lang.String getIcmpTypeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `portRangeEndInput`<sup>Optional</sup> <a name="portRangeEndInput" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.portRangeEndInput"></a>

```java
public java.lang.Number getPortRangeEndInput();
```

- *Type:* java.lang.Number

---

##### `portRangeStartInput`<sup>Optional</sup> <a name="portRangeStartInput" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.portRangeStartInput"></a>

```java
public java.lang.Number getPortRangeStartInput();
```

- *Type:* java.lang.Number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `sourceIpInput`<sup>Optional</sup> <a name="sourceIpInput" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.sourceIpInput"></a>

```java
public java.lang.String getSourceIpInput();
```

- *Type:* java.lang.String

---

##### `sourceMacInput`<sup>Optional</sup> <a name="sourceMacInput" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.sourceMacInput"></a>

```java
public java.lang.String getSourceMacInput();
```

- *Type:* java.lang.String

---

##### `targetIpInput`<sup>Optional</sup> <a name="targetIpInput" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.targetIpInput"></a>

```java
public java.lang.String getTargetIpInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `icmpCode`<sup>Required</sup> <a name="icmpCode" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.icmpCode"></a>

```java
public java.lang.String getIcmpCode();
```

- *Type:* java.lang.String

---

##### `icmpType`<sup>Required</sup> <a name="icmpType" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.icmpType"></a>

```java
public java.lang.String getIcmpType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `portRangeEnd`<sup>Required</sup> <a name="portRangeEnd" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.portRangeEnd"></a>

```java
public java.lang.Number getPortRangeEnd();
```

- *Type:* java.lang.Number

---

##### `portRangeStart`<sup>Required</sup> <a name="portRangeStart" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.portRangeStart"></a>

```java
public java.lang.Number getPortRangeStart();
```

- *Type:* java.lang.Number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `sourceIp`<sup>Required</sup> <a name="sourceIp" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.sourceIp"></a>

```java
public java.lang.String getSourceIp();
```

- *Type:* java.lang.String

---

##### `sourceMac`<sup>Required</sup> <a name="sourceMac" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.sourceMac"></a>

```java
public java.lang.String getSourceMac();
```

- *Type:* java.lang.String

---

##### `targetIp`<sup>Required</sup> <a name="targetIp" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.targetIp"></a>

```java
public java.lang.String getTargetIp();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.server.ServerNicFirewallOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewall">ServerNicFirewall</a>

---


### ServerNicOutputReference <a name="ServerNicOutputReference" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.server.ServerNicOutputReference;

new ServerNicOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.putFirewall">putFirewall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.resetDhcp">resetDhcp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.resetDhcpv6">resetDhcpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.resetFirewall">resetFirewall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.resetFirewallActive">resetFirewallActive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.resetFirewallType">resetFirewallType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.resetIps">resetIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.resetIpv6CidrBlock">resetIpv6CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.resetIpv6Ips">resetIpv6Ips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFirewall` <a name="putFirewall" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.putFirewall"></a>

```java
public void putFirewall(IResolvable OR java.util.List<ServerNicFirewall> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.putFirewall.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewall">ServerNicFirewall</a>>

---

##### `resetDhcp` <a name="resetDhcp" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.resetDhcp"></a>

```java
public void resetDhcp()
```

##### `resetDhcpv6` <a name="resetDhcpv6" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.resetDhcpv6"></a>

```java
public void resetDhcpv6()
```

##### `resetFirewall` <a name="resetFirewall" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.resetFirewall"></a>

```java
public void resetFirewall()
```

##### `resetFirewallActive` <a name="resetFirewallActive" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.resetFirewallActive"></a>

```java
public void resetFirewallActive()
```

##### `resetFirewallType` <a name="resetFirewallType" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.resetFirewallType"></a>

```java
public void resetFirewallType()
```

##### `resetIps` <a name="resetIps" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.resetIps"></a>

```java
public void resetIps()
```

##### `resetIpv6CidrBlock` <a name="resetIpv6CidrBlock" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.resetIpv6CidrBlock"></a>

```java
public void resetIpv6CidrBlock()
```

##### `resetIpv6Ips` <a name="resetIpv6Ips" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.resetIpv6Ips"></a>

```java
public void resetIpv6Ips()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.deviceNumber">deviceNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.firewall">firewall</a></code> | <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallList">ServerNicFirewallList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.mac">mac</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.pciSlot">pciSlot</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.dhcpInput">dhcpInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.dhcpv6Input">dhcpv6Input</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.firewallActiveInput">firewallActiveInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.firewallInput">firewallInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewall">ServerNicFirewall</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.firewallTypeInput">firewallTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.ipsInput">ipsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.ipv6CidrBlockInput">ipv6CidrBlockInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.ipv6IpsInput">ipv6IpsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.lanInput">lanInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.dhcp">dhcp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.dhcpv6">dhcpv6</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.firewallActive">firewallActive</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.firewallType">firewallType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.ips">ips</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.ipv6CidrBlock">ipv6CidrBlock</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.ipv6Ips">ipv6Ips</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.lan">lan</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.server.ServerNic">ServerNic</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deviceNumber`<sup>Required</sup> <a name="deviceNumber" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.deviceNumber"></a>

```java
public java.lang.Number getDeviceNumber();
```

- *Type:* java.lang.Number

---

##### `firewall`<sup>Required</sup> <a name="firewall" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.firewall"></a>

```java
public ServerNicFirewallList getFirewall();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewallList">ServerNicFirewallList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `mac`<sup>Required</sup> <a name="mac" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.mac"></a>

```java
public java.lang.String getMac();
```

- *Type:* java.lang.String

---

##### `pciSlot`<sup>Required</sup> <a name="pciSlot" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.pciSlot"></a>

```java
public java.lang.Number getPciSlot();
```

- *Type:* java.lang.Number

---

##### `dhcpInput`<sup>Optional</sup> <a name="dhcpInput" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.dhcpInput"></a>

```java
public java.lang.Object getDhcpInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dhcpv6Input`<sup>Optional</sup> <a name="dhcpv6Input" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.dhcpv6Input"></a>

```java
public java.lang.Object getDhcpv6Input();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `firewallActiveInput`<sup>Optional</sup> <a name="firewallActiveInput" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.firewallActiveInput"></a>

```java
public java.lang.Object getFirewallActiveInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `firewallInput`<sup>Optional</sup> <a name="firewallInput" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.firewallInput"></a>

```java
public java.lang.Object getFirewallInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ionoscloud.server.ServerNicFirewall">ServerNicFirewall</a>>

---

##### `firewallTypeInput`<sup>Optional</sup> <a name="firewallTypeInput" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.firewallTypeInput"></a>

```java
public java.lang.String getFirewallTypeInput();
```

- *Type:* java.lang.String

---

##### `ipsInput`<sup>Optional</sup> <a name="ipsInput" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.ipsInput"></a>

```java
public java.util.List<java.lang.String> getIpsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipv6CidrBlockInput`<sup>Optional</sup> <a name="ipv6CidrBlockInput" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.ipv6CidrBlockInput"></a>

```java
public java.lang.String getIpv6CidrBlockInput();
```

- *Type:* java.lang.String

---

##### `ipv6IpsInput`<sup>Optional</sup> <a name="ipv6IpsInput" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.ipv6IpsInput"></a>

```java
public java.util.List<java.lang.String> getIpv6IpsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `lanInput`<sup>Optional</sup> <a name="lanInput" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.lanInput"></a>

```java
public java.lang.Number getLanInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `dhcp`<sup>Required</sup> <a name="dhcp" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.dhcp"></a>

```java
public java.lang.Object getDhcp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dhcpv6`<sup>Required</sup> <a name="dhcpv6" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.dhcpv6"></a>

```java
public java.lang.Object getDhcpv6();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `firewallActive`<sup>Required</sup> <a name="firewallActive" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.firewallActive"></a>

```java
public java.lang.Object getFirewallActive();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `firewallType`<sup>Required</sup> <a name="firewallType" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.firewallType"></a>

```java
public java.lang.String getFirewallType();
```

- *Type:* java.lang.String

---

##### `ips`<sup>Required</sup> <a name="ips" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.ips"></a>

```java
public java.util.List<java.lang.String> getIps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipv6CidrBlock`<sup>Required</sup> <a name="ipv6CidrBlock" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.ipv6CidrBlock"></a>

```java
public java.lang.String getIpv6CidrBlock();
```

- *Type:* java.lang.String

---

##### `ipv6Ips`<sup>Required</sup> <a name="ipv6Ips" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.ipv6Ips"></a>

```java
public java.util.List<java.lang.String> getIpv6Ips();
```

- *Type:* java.util.List<java.lang.String>

---

##### `lan`<sup>Required</sup> <a name="lan" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.lan"></a>

```java
public java.lang.Number getLan();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.server.ServerNicOutputReference.property.internalValue"></a>

```java
public ServerNic getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.server.ServerNic">ServerNic</a>

---


### ServerTimeoutsOutputReference <a name="ServerTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.server.ServerTimeoutsOutputReference;

new ServerTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.resetDefault"></a>

```java
public void resetDefault()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.property.defaultInput">defaultInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.server.ServerTimeouts">ServerTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.property.defaultInput"></a>

```java
public java.lang.String getDefaultInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.server.ServerTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.server.ServerTimeouts">ServerTimeouts</a>

---


### ServerVolumeOutputReference <a name="ServerVolumeOutputReference" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.server.ServerVolumeOutputReference;

new ServerVolumeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.resetBackupUnitId">resetBackupUnitId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.resetBus">resetBus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.resetImagePassword">resetImagePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.resetLicenceType">resetLicenceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.resetSize">resetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.resetSshKeyPath">resetSshKeyPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.resetSshKeys">resetSshKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.resetUserData">resetUserData</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.resetAvailabilityZone"></a>

```java
public void resetAvailabilityZone()
```

##### `resetBackupUnitId` <a name="resetBackupUnitId" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.resetBackupUnitId"></a>

```java
public void resetBackupUnitId()
```

##### `resetBus` <a name="resetBus" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.resetBus"></a>

```java
public void resetBus()
```

##### `resetImagePassword` <a name="resetImagePassword" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.resetImagePassword"></a>

```java
public void resetImagePassword()
```

##### `resetLicenceType` <a name="resetLicenceType" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.resetLicenceType"></a>

```java
public void resetLicenceType()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetSize` <a name="resetSize" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.resetSize"></a>

```java
public void resetSize()
```

##### `resetSshKeyPath` <a name="resetSshKeyPath" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.resetSshKeyPath"></a>

```java
public void resetSshKeyPath()
```

##### `resetSshKeys` <a name="resetSshKeys" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.resetSshKeys"></a>

```java
public void resetSshKeys()
```

##### `resetUserData` <a name="resetUserData" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.resetUserData"></a>

```java
public void resetUserData()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.bootServer">bootServer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.cpuHotPlug">cpuHotPlug</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.deviceNumber">deviceNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.discVirtioHotPlug">discVirtioHotPlug</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.discVirtioHotUnplug">discVirtioHotUnplug</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.nicHotPlug">nicHotPlug</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.nicHotUnplug">nicHotUnplug</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.pciSlot">pciSlot</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.ramHotPlug">ramHotPlug</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.backupUnitIdInput">backupUnitIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.busInput">busInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.diskTypeInput">diskTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.imagePasswordInput">imagePasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.licenceTypeInput">licenceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.sizeInput">sizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.sshKeyPathInput">sshKeyPathInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.sshKeysInput">sshKeysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.userDataInput">userDataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.backupUnitId">backupUnitId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.bus">bus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.diskType">diskType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.imagePassword">imagePassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.licenceType">licenceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.size">size</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.sshKeyPath">sshKeyPath</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.sshKeys">sshKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.userData">userData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.server.ServerVolume">ServerVolume</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bootServer`<sup>Required</sup> <a name="bootServer" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.bootServer"></a>

```java
public java.lang.String getBootServer();
```

- *Type:* java.lang.String

---

##### `cpuHotPlug`<sup>Required</sup> <a name="cpuHotPlug" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.cpuHotPlug"></a>

```java
public IResolvable getCpuHotPlug();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `deviceNumber`<sup>Required</sup> <a name="deviceNumber" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.deviceNumber"></a>

```java
public java.lang.Number getDeviceNumber();
```

- *Type:* java.lang.Number

---

##### `discVirtioHotPlug`<sup>Required</sup> <a name="discVirtioHotPlug" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.discVirtioHotPlug"></a>

```java
public IResolvable getDiscVirtioHotPlug();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `discVirtioHotUnplug`<sup>Required</sup> <a name="discVirtioHotUnplug" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.discVirtioHotUnplug"></a>

```java
public IResolvable getDiscVirtioHotUnplug();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `nicHotPlug`<sup>Required</sup> <a name="nicHotPlug" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.nicHotPlug"></a>

```java
public IResolvable getNicHotPlug();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `nicHotUnplug`<sup>Required</sup> <a name="nicHotUnplug" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.nicHotUnplug"></a>

```java
public IResolvable getNicHotUnplug();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `pciSlot`<sup>Required</sup> <a name="pciSlot" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.pciSlot"></a>

```java
public java.lang.Number getPciSlot();
```

- *Type:* java.lang.Number

---

##### `ramHotPlug`<sup>Required</sup> <a name="ramHotPlug" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.ramHotPlug"></a>

```java
public IResolvable getRamHotPlug();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.availabilityZoneInput"></a>

```java
public java.lang.String getAvailabilityZoneInput();
```

- *Type:* java.lang.String

---

##### `backupUnitIdInput`<sup>Optional</sup> <a name="backupUnitIdInput" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.backupUnitIdInput"></a>

```java
public java.lang.String getBackupUnitIdInput();
```

- *Type:* java.lang.String

---

##### `busInput`<sup>Optional</sup> <a name="busInput" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.busInput"></a>

```java
public java.lang.String getBusInput();
```

- *Type:* java.lang.String

---

##### `diskTypeInput`<sup>Optional</sup> <a name="diskTypeInput" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.diskTypeInput"></a>

```java
public java.lang.String getDiskTypeInput();
```

- *Type:* java.lang.String

---

##### `imagePasswordInput`<sup>Optional</sup> <a name="imagePasswordInput" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.imagePasswordInput"></a>

```java
public java.lang.String getImagePasswordInput();
```

- *Type:* java.lang.String

---

##### `licenceTypeInput`<sup>Optional</sup> <a name="licenceTypeInput" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.licenceTypeInput"></a>

```java
public java.lang.String getLicenceTypeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.sizeInput"></a>

```java
public java.lang.Number getSizeInput();
```

- *Type:* java.lang.Number

---

##### `sshKeyPathInput`<sup>Optional</sup> <a name="sshKeyPathInput" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.sshKeyPathInput"></a>

```java
public java.util.List<java.lang.String> getSshKeyPathInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sshKeysInput`<sup>Optional</sup> <a name="sshKeysInput" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.sshKeysInput"></a>

```java
public java.util.List<java.lang.String> getSshKeysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `userDataInput`<sup>Optional</sup> <a name="userDataInput" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.userDataInput"></a>

```java
public java.lang.String getUserDataInput();
```

- *Type:* java.lang.String

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `backupUnitId`<sup>Required</sup> <a name="backupUnitId" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.backupUnitId"></a>

```java
public java.lang.String getBackupUnitId();
```

- *Type:* java.lang.String

---

##### `bus`<sup>Required</sup> <a name="bus" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.bus"></a>

```java
public java.lang.String getBus();
```

- *Type:* java.lang.String

---

##### `diskType`<sup>Required</sup> <a name="diskType" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.diskType"></a>

```java
public java.lang.String getDiskType();
```

- *Type:* java.lang.String

---

##### `imagePassword`<sup>Required</sup> <a name="imagePassword" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.imagePassword"></a>

```java
public java.lang.String getImagePassword();
```

- *Type:* java.lang.String

---

##### `licenceType`<sup>Required</sup> <a name="licenceType" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.licenceType"></a>

```java
public java.lang.String getLicenceType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

---

##### `sshKeyPath`<sup>Required</sup> <a name="sshKeyPath" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.sshKeyPath"></a>

```java
public java.util.List<java.lang.String> getSshKeyPath();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sshKeys`<sup>Required</sup> <a name="sshKeys" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.sshKeys"></a>

```java
public java.util.List<java.lang.String> getSshKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `userData`<sup>Required</sup> <a name="userData" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.userData"></a>

```java
public java.lang.String getUserData();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.server.ServerVolumeOutputReference.property.internalValue"></a>

```java
public ServerVolume getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.server.ServerVolume">ServerVolume</a>

---



